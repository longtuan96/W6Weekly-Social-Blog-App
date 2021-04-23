import React from "react";

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ ...rest }) => {
  const isAuthenticated = true;
  if (isAuthenticated) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
