import React, { useState } from "react";
import { Media, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { blogActions } from "../redux/actions/blog.action";

const NewReviewBox = ({ id }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route).redirectTo;
  const [formData, setFormData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { content } = formData;
    dispatch(blogActions.newReview(id, { content }));
  };

  return (
    <div className="newBlogBox">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={user.avatarUrl}
          alt="current user avatar"
        />
        <Media.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="What are you thinking about"
                name="content"
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Tweet
              </Button>
            </div>
          </Form>
        </Media.Body>
      </Media>
    </div>
  );
};

export default NewReviewBox;
