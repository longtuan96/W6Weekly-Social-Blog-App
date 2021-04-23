import React from "react";
import { Switch, Route } from "react-router";
import Homepage from "../pages/Homepage";
import Registerpage from "../pages/Registerpage";
import Loginpage from "../pages/Loginpage";

const PublicLayout = () => {
  return (
    <div>
      <h1>Public layout</h1>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={Registerpage} />
        <Route exact path="/login" component={Loginpage} />
      </Switch>
    </div>
  );
};

export default PublicLayout;
