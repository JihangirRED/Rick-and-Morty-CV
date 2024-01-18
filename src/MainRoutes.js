import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users.jsx";
import AboutPage from "./components/AboutPage.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default MainRoutes;
