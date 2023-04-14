import React from "react";
import { useAuth } from "../context/AuthProvider";
const Profile = () => {
  const { user, logout } = useAuth();
  const logoutHandler = () => {
    logout();
  };
  console.log(user);
  return (
    <>
      <h1>Welcome {user && user.username}</h1>
      <button type="submit" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

export default Profile;
