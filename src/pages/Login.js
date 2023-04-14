import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
const Login = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, error } = useAuth();
  


  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    login(user,password);
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="text" placeholder="Username"
                onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input 
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" type="password"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="flex items-center justify-between">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
            </div>
            <p>{error && error.message}</p>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2023 Koding Akademi.
        </p>
        </div>
    </>
  );
};

export default Login;
