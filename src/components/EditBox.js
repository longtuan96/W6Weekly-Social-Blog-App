import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { blogActions } from "../redux/actions/blog.action";

const EditBox = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route).redirectTo;
  const [formData, setFormData] = useState({
    content: "",
    images: [],
    title: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, images } = formData;
    console.log(
      `title: ${title} content: ${content} imageUrl: ${images} id:${id}`
    );
    dispatch(blogActions.updateBlog({ title, content, images }, id));
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Content"
            name="content"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditBox;
