import React from "react";
import Cat from "../src/Cat.jsx";
const NextCat = ({url}) => {
    console.log(url.query);
  return <Cat is_next={true} {...url.query} />;
};

export default NextCat;
