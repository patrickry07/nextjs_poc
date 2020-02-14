import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NextLink from "next/link";
import Cat from "./Cat.jsx";
import Axios from "axios";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {},
      selected: false
    };
  }
  componentDidMount() {
    console.log(this.props);
    Axios.get("https://randomfox.ca/floof/")
      .then(({ data }) => {
        console.log(data);
        return this.setState({ cat: data });
      })
      .catch(error => {
        throw new Error(error);
      });
  }
  selectCat() {}
  render() {
    const { cat } = this.state;
    const { is_next } = this.props;
    return (
      <>
        <img src={cat.image} alt=""></img>
        {is_next ? (
          <NextLink
            href={{ pathname: "/cat", query: { url: cat.link } }}
            as="/cat"
          >
            <a>Cat</a>
          </NextLink>
        ) : (
          <Link
            to={{
              pathname: `/cat`,
              state: {
                url: cat.link
              }
            }}
          >
            FIND OUT MORE
          </Link>
        )}
      </>
    );
  }
}
export default Homepage;
