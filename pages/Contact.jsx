import React from "react";
import Nav from "../src/Nav.jsx";
import Contact from "../src/Contact.jsx";
const NextContact = ({ url }) => {
  return (
    <>
      <Nav is_next={true} />
      <Contact/>;
    </>
  );
};

export default NextContact;
