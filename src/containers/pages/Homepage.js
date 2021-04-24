import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import BlogBox from "../../components/BlogBox";
import NewBlogBox from "../../components/NewBlogBox";
import UserInfo from "../../components/UserInfo";
import { blogActions } from "../../redux/actions/blog.action";
import { userActions } from "../../redux/actions/user.action";

import api from "../../redux/api";

const Homepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog).blogs;
  const newBlogs = useSelector((state) => state.blog.newBlogs);

  const handleBlogClick = (id) => {
    history.push(`/blogs/${id}`);
  };
  useEffect(() => {
    dispatch(blogActions.getBlogs());
    dispatch(userActions.getUser());
  }, [newBlogs]);

  return (
    <div className="row Ultility-page">
      <div className="col-3">
        <div className="buttonForShow-div">
          list of vertical button for show
        </div>
        <button onClick="">Profile</button>
        <button onClick="">Tweet</button>
        <UserInfo />
      </div>
      <div className="col-6">
        <NewBlogBox />
        {blogs &&
          blogs.map((item, itemIndex) => (
            <a href onClick={() => handleBlogClick(item._id)}>
              <BlogBox key={itemIndex} item={item} />
            </a>
          ))}
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default Homepage;
