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
    <div className="tweet-form review-form">
      <div className="tweet-left">
        <img className="tweet-img" src={user.avatarUrl ? user.avatarUrl
          : "profile.jpg"
        } alt="user-avatar" />
      </div>
      <div className="tweet-right">
        <form className="" onSubmit={handleSubmit}>

          <textarea
            placeholder="Write your review here"
            onChange={handleChange}
          />

          <div className="tweet-right-bot">
            <button className="btn-light" type="submit">
              Submit
              </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default NewReviewBox;
