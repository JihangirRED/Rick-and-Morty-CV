import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navbar1" to="/">
        Home
      </NavLink>
      <NavLink className="navbar1" to="/users">
        Users
      </NavLink>
      <NavLink className="navbar1" to="/about">
        About Me
      </NavLink>
    </div>
  );
};

export default Navbar;
