import React from "react";
import Cat from "../src/Cat.jsx";
import Nav from "../src/Nav.jsx";
const NextCat = ({ url }) => {
  return (
    <>
      <Nav is_next={true} />
      <Cat is_next={true} {...url.query} />;
    </>
  );
};

export default NextCat;
