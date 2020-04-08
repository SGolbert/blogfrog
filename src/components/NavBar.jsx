import React from "react";
import { Link } from "react-router-dom";
import navBarStyles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={navBarStyles.navBar}>
      <img className={navBarStyles.logo} src="./frog.png" alt="BlogFrog"></img>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
