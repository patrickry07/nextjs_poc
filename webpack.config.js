let path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

let DIST_DIR = "dist";

let plugins = [
  // Remove generated files from distribution folder
  new CleanWebpackPlugin([DIST_DIR + "/*"]),
  new CleanWebpackPlugin(["src/templates/dist/*"], {
    root: path.resolve(__dirname, "..")
  }),

  // Define global variables

  // Extract CSS imported from JS into a separate file
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  }),

  // Automatically load modules instead of having to import or require them everywhere.
  new webpack.ProvidePlugin({
    // underscore
    _: "underscore",
    "window._": "underscore",

    // jQuery - Needed for plugins not using NPM

    // Marionette - TODO: deprecated
    Promise: "es6-promise"
  })
];

// Helper function returns HtmlWebpackPlugin instance
const buildProvider = (
  module_name,
  is_admin = false,
  src_template = "./src/templates/empty_template.html"
) => {
  const template_prefix = path.resolve(__dirname, ".");
  return new HtmlWebpackPlugin({
    template: `${src_template}`,
    filename: `${template_prefix}/src/templates/dist/dist_${module_name}.html`,
    chunks: [module_name]
  });
};

// Define all user entry points
const user_entry_points = {
  ask_expert: ["./src/App.jsx"]
};
for (let module_name in user_entry_points) {
  plugins.push(
    buildProvider(module_name, false, user_entry_points[module_name][1])
  );
}

module.exports = function(env, args) {
  let is_production = args.mode !== "development";
  if (args.hasOwnProperty("analyze")) plugins.push(new BundleAnalyzerPlugin());

  if (is_production) {
    plugins.push(
      new CompressionPlugin({
        test: /\.(js|css|html|tpl|hbs|svg)$/
      })
    );
  } else {
    plugins.push(new webpack.ProgressPlugin());
  }

  return {
    // Define application entry point.
    entry: {
      ask_expert: "./src/App.jsx"
    },

    // Define application output files
    output: {
      path: __dirname + "/dist",
      filename: "[name].[contenthash].min.js",
      publicPath: "/dist/"
    },

    plugins: plugins,

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
          query: {
            helperDirs: [__dirname + "/app/js/_handlebars_helpers"]
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            //is_production ? MiniCssExtractPlugin.loader : 'style-loader',
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: "url-loader"
        },
        {
          parser: {
            system: false
          }
        }
      ]
    },

    resolve: {
      alias: {
        systemjs: path.resolve(__dirname, "node_modules", "systemjs"),
        "react-hook-form": path.resolve(
          __dirname,
          "node_modules",
          "react-hook-form/dist/react-hook-form.ie11"
        )
      },
      extensions: [".js", ".jsx"]
    },

    node: {
      fs: "empty"
    }
  };
};
