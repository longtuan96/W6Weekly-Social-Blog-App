import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import api from "../../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../../redux/actions/blog.action";

const Profilepage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(blogActions.getBlogs());
  }, []);
  return (
    <div>
      <h1>Profile Page</h1>
      <Button variant="success"> Edit </Button>
      <Button variant="danger">Edit avatar</Button>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={blogs & blogs.map((blog) => <p>{blog.author.name}</p>)}
            name={blogs & blogs.map((blog) => <p>{blog.author.name}</p>)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Useremail"
            email={blogs & blogs.map((blog) => <p>{blog.author.email}</p>)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="submit">
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default Profilepage;
