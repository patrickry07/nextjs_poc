import React from "react";
import Nav from "../src/Nav.jsx";
import Homepage from "../src/Homepage.jsx";
const HomePage = () => {
  return (
    <>
      <Nav is_next={true} />
      <Homepage is_next={true} />
    </>
  );
};

export default HomePage;
