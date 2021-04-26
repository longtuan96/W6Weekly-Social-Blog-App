import React, { useEffect, useState } from "react";
import { Media, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { blogActions } from "../redux/actions/blog.action";
import TestImgUpload from "./TestImgUpload";

const NewBlogBox = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectTo = useSelector((state) => state.route).redirectTo;
  const imgUrlNewBlog = useSelector((state) => state.blog.imgUrlNewBlog);
  let arrayImg = [];

  const [formData, setFormData] = useState({
    content: "",
    images: arrayImg,
    title: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, images } = formData;
    dispatch(blogActions.newBlog({ title, content, images }));
  };
  useEffect(() => {
    arrayImg[0] = imgUrlNewBlog;
    console.log("arrayImg: ", arrayImg);
  }, [imgUrlNewBlog]);

  useEffect(() => {
    if (redirectTo) {
      history.push("/home");
    }
  }, [redirectTo]);

  return (
    <div className="tweet-form">
      <div className="tweet-left">
        <img
          className="tweet-img"
          src={user.avatarUrl ? user.avatarUrl : "profile.jpg"}
          alt="user-avatar"
        />
      </div>

      <form className="tweet-right" onSubmit={handleSubmit}>
        <input
          className="form-text-input"
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="What's happening?"
          name="content"
          onChange={handleChange}
        />
        <div className="tweet-right-bot">
          <TestImgUpload />
          <button className="btn-light" type="submit">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlogBox;
