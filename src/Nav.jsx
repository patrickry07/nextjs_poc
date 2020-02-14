import React, { Component } from "react";
import Link from "./Link.jsx";

const Nav = ({ is_next }) => {
  return (
    <div>
      <ul className="header">
        <Link is_next={is_next} path={"/"} text={"Home"} />
        <Link is_next={is_next} path={"/about"} text={"About"} />
        <Link is_next={is_next} path={"/contact"} text={"Contact"} />
      </ul>
      <div className="content"></div>
    </div>
  );
};

export default Nav;
