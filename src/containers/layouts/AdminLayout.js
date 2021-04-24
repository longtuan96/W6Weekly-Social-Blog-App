import React from "react";
import { Switch, Route } from "react-router";
import Profilepage from "../pages/Profilepage";
import Blogspage from "../pages/Blogspage";

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Switch>
        <Route exact path="/admin/profile" component={Profilepage} />
        <Route exact path="/admin/blogs" component={Blogspage} />
      </Switch>
    </div>
  );
};

export default AdminLayout;
