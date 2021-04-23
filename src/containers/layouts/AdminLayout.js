import React from "react";
import { Switch, Route } from "react-router";
import Profilepage from "../pages/Profilepage";

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Switch>
        <Route exact path="/admin/profile" component={Profilepage} />
      </Switch>
    </div>
  );
};

export default AdminLayout;
