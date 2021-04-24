import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogBox from "../../components/BlogBox";
import NewBlogBox from "../../components/NewBlogBox";
import UserInfo from "../../components/UserInfo";
import { blogActions } from "../../redux/actions/blog.action";

import api from "../../redux/api";

const Homepage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  const handleClick = () => {};
  useEffect(() => {
    dispatch(blogActions.getBlogs());
  }, []);

  return (
    <div className="row Ultility-page">
      <div className="col-3">
        <div className="buttonForShow-div">
          list of vertical button for show
        </div>
        <button onClick={handleClick}>Profile</button>
        <button onClick={handleClick}>Tweet</button>
        <UserInfo />
      </div>
      <div className="col-6">
        <NewBlogBox />
        {blogs &&
          blogs.map((item, itemIndex) => (
            <BlogBox key={itemIndex} item={item} />
          ))}
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default Homepage;
