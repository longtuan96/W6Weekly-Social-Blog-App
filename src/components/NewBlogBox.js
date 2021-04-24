import React, { useEffect, useState } from "react";
import { Media, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { blogActions } from "../redux/actions/blog.action";

const NewBlogBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, imageUrl } = formData;
    dispatch(blogActions.newBlog({ title, content, imageUrl }));
  };

  useEffect(() => {
    if (redirectTo) {
      history.push("/home");
    }
  }, [redirectTo]);

  return (
    <div className="newBlogBox">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src=""
          alt="current user avatar"
        />
        <Media.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="What are you thinking about"
                name="content"
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary">add image</Button>
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

export default NewBlogBox;
