import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../../redux/actions/auth.action";
import { routeActions } from "../../redux/actions/route.action";

const Loginpage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const redirectTo = useSelector((state) => state.route.redirectTo);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(authActions.loginUser({ email, password }));
  };
  const handleFacebook = (e) => {
    dispatch(authActions.loginWithFacebook());
  };
  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);

      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo]);

  return (
    <div className="Ultility-page">
      <div className="centered-div Login-div">
        <h1>Log in to Twitter</h1>
        <button onClick={handleFacebook}>facebook</button>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <button className="btn-light" type="submit">
            Log In
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Loginpage;
