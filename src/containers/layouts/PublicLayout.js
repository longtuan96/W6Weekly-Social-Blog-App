import React from "react";
import { Switch, Route } from "react-router";
import Homepage from "../pages/Homepage";
import BlogDetail from "../pages/BlogDetail";
import Registerpage from "../pages/Registerpage";
import Loginpage from "../pages/Loginpage";
import WelcomePage from "../pages/WelcomePage";
import ProtectedRoute from "../Routes/ProtectedRoute";
import VerifyEmailPage from "../pages/VerifyEmailPage";

const PublicLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <ProtectedRoute exact path="/home" component={Homepage} />
        <ProtectedRoute exact path="/blogs/:blog_id" component={BlogDetail} />
        <Route exact path="/register" component={Registerpage} />
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/verify/:token" component={VerifyEmailPage} />
      </Switch>
    </div>
  );
};

export default PublicLayout;
