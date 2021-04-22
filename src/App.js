import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/Login";
import Register from "./pages/Register";

import { blogActions } from "../redux/acion/blog.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  //this is just an example for using  redux thunk
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogActions.fetchData());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/api/blogs/:blog_id" exact component={HomePage} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
