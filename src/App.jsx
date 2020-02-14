import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Cat from "./Cat.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <>
        <Router>
          {/* <Link to="/cat">FIND OUT MORE</Link> */}
          <Route exact path={"/"}>
            <Homepage is_next={false} />
          </Route>
          <Route
            exact
            path={"/cat"}
            render={(props) => <Cat {...props} is_next={true} url={props.location.state.url} />}
          ></Route>
        </Router>
      </>
    );
  }
}
export default AppRouter;
