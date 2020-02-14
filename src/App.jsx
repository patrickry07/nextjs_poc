import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Nav from "./Nav.jsx";
import Cat from "./Cat.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Nav is_next={false} />
          <Route exact path={"/"}>
            <Homepage is_next={false} />
          </Route>
          <Route
            exact
            path={"/cat"}
            render={props => (
              <Cat {...props} is_next={true} url={props.location.state.url} />
            )}
          ></Route>
          <Route exact path="/about">
            <About is_next={false} />
          </Route>
          <Route exact path="/contact">
            <Contact is_next={false} />
          </Route>
        </Router>
      </>
    );
  }
}
export default AppRouter;
