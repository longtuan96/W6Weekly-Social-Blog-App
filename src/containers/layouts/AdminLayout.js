import React from "react";
import { Switch, Route } from "react-router";
import Profilepage from "../pages/Profilepage";
import ProtectedRoute from "../Routes/ProtectedRoute";

const AdminLayout = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path="/user/profile" component={Profilepage} />
      </Switch>
    </div>
  );
};

export default AdminLayout;
