import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const Authentication = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user.username) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
    //return <p>errrrrrrrr</p>;
  }
  return children;
};

export default Authentication;
