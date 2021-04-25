import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { authActions } from "../../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routeActions } from "../../redux/actions/route.action";
import TestImgUpload from "../../components/TestImgUpload";
const Registerpage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const imgUrl = useSelector((state) => state.auth.imgUrl);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register data:", formData);
    const { name, email, password, password2 } = formData;
    if (password !== password2) {
      console.log("password is not match");
      return;
    } else {
      dispatch(
        authActions.registerUser({ name, email, password, avatarUrl: imgUrl })
      );
    }
  };

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo]);

  return (
    <div className="Ultility-page">
      <div className="Register-div centered-div">
        <h1>Create your account</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>

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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="password2"
              onChange={handleChange}
            />
          </Form.Group>
          <TestImgUpload place="register" />
          <button className="btn-light" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Registerpage;
