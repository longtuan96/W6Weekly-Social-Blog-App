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
      history.push("/home");
    }
  }, [redirectTo]);

  return (
    <div>
      {localStorage.getItem("isAuthenticated") ? (
        history.push("/home")
      ) : (
        <div className="Ultility-page row">
          <div className="col-7 Welcome-img">
            <h1>a big picture</h1>
          </div>
          <div className="col-5">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Button type="submit" variant="outline-primary">
                    Log in
                  </Button>
                </Col>
              </Form.Row>
            </Form>

            <div>
              <h1>Join Twitter today</h1>
              <ButtonGroup vertical>
                <Button
                  className="Welcome-button"
                  variant="primary"
                  onClick={() => handleClick("register")}
                >
                  Sign up
                </Button>
                <Button
                  className="Welcome-button"
                  variant="outline-primary"
                  onClick={() => handleClick("login")}
                >
                  Log In
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
