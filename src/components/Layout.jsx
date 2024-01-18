import React from "react";
import { Outlet } from "react-router-dom";
import logo from "./img/photo_2023-12-28_15-07-58.jpg";

const Layout = () => {
  return (
    <div className="main-main">
      <img className="logo" src={logo} alt="" />
      <Outlet />
      <footer>
        <p>@makers2024</p>
      </footer>
    </div>
  );
};

export default Layout;
