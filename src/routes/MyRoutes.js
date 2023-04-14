import Authentication from "./Authentication";
import Authorization from "./Authorization";
import PermissionData from "../context/PermissionData";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Admin from "../pages/admin";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        element={<Authorization permissions={[PermissionData.VIEW_ABOUT]} />}
      >
        <Route path='about' element={<About />} />
      </Route>
      <Route
        path='profile'
        element={
          <Authentication>
            <Profile />
          </Authentication>
        }
      />
      <Route
        element={<Authorization permissions={[PermissionData.VIEW_DETAIL]} />}
      >
        <Route path='admin' element={<Admin/>} />
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  );
};

export default MyRoutes;
