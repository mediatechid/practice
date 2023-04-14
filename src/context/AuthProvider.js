import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/profile";
  const [user, setUser] = useState({
    username: "",
    password: "",
    permissions: []
  });
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  
  const login = (username,password) => {
    if (username === "admin") {
      axios.post('http://localhost:8000/auth/login', { username: username, password: password})
      .then(function (response) {
        console.log(response);
        const respAxios = response.data;
        setUser({ username: user, password: password, permissions: ["view_detail"] });
        setToken(respAxios.token);
      })
      .catch(function (error) {
        setError(error);
      });
      
    } else {
      axios.post('http://localhost:8000/auth/login', { email: username, password: password})
      .then(function (response) {
        const respAxios = response.data;
        setToken(respAxios.token);
        setUser({ username: respAxios.email, password: password, permissions: ["view_about"] });
        navigate(redirectPath, { replace: true });
      })
      .catch(function (error) {
        setError(error);
      });
      
    }
  };

 
  const logout = () => {
    setUser({ username: "", permissions: [] });
  };
  return (
    <AuthContext.Provider value={{ user, token, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
