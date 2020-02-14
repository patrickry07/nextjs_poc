import React from "react";
import NextLink from "next/link";
import { Link as ReactLink } from "react-router-dom";
const Link = ({ is_next, path, data, text }) => {
    console.log('hello')
  return (
    <>
      {is_next ? (
        <NextLink href={{ pathname: path, query: data }} as={path}>
          <a>{text}</a>
        </NextLink>
      ) : (
        <ReactLink
          to={{
            pathname: path,
            state: data
          }}
        >
          {text}
        </ReactLink>
      )}
    </>
  );
};
export default Link;
