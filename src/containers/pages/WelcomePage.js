import React, { useEffect, useState } from "react";
import { Form, Col, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../../redux/actions/auth.action";

const WelcomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(authActions.loginUser({ email, password }));
  };

  const handleClick = (page) => {
    history.push(`/${page}`);
  };

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div>
      {localStorage.getItem("isAuthenticated") ? (
        history.push("/home")
      ) : (
        <div className="Ultility-page welcome-page row">
          <div className="Welcome-img col-5">
            <div className="overlay1" />
            <img src="welcome.jpg" alt="a welcome pic" />
          </div>
          <div className="welcome-page-right">
            <form className="form-login" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="form-text-input"
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="form-text-input"
              />

              <button type="submit" className="btn-dark">
                Log in
              </button>
            </form>

            <div className="welcome-page-right-bot">
              <h1>Hapenning now</h1>
              <h2>Join Twitter today.</h2>

              <button
                className="btn-light"
                onClick={() => handleClick("register")}
              >
                Sign up
              </button>
              <br />
              <button className="btn-dark" onClick={() => handleClick("login")}>
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
