import { Route, NavLink, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>React Router Simple Starter</h1>
            <ul className="header">
              <li><a className="active" href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
       <div className="content"></div>
      </div>
    );
  }
}

export default Nav;