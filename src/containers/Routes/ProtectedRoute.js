import React from "react";
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ ...rest }) => {
  let isAuthenticated = false;
  let getToken = localStorage.getItem("accessToken");
  if (getToken) {
    isAuthenticated = true;
  }
  if (isAuthenticated) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
