import React from "react";
import Nav from "../src/Nav.jsx";
import About from "../src/About.jsx";
const NextAbout = ({ url }) => {
  return (
    <>
      <Nav is_next={true} />
      <About/>;
    </>
  );
};

export default NextAbout;