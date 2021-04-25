import React from "react";
import { Switch, Route } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
const Routes = () => {
  return (

    <Switch>
      <ProtectedRoute path="/user" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};

export default Routes;
