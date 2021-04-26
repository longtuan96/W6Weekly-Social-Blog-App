import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import BlogBox from "../../components/BlogBox";
import NewBlogBox from "../../components/NewBlogBox";
import PaginationComp from "../../components/PaginationComp";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";
import { blogActions } from "../../redux/actions/blog.action";
import { paginationActions } from "../../redux/actions/pagination.action";
import { userActions } from "../../redux/actions/user.action";

import api from "../../redux/api";

const Homepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const newBlogs = useSelector((state) => state.blog);
  const user = useSelector((state) => state.user.user);
  const currentPageBlogs = useSelector(
    (state) => state.pagination.currentPageBlogs
  );
  const totalPageBlogs = useSelector(
    (state) => state.pagination.totalPageBlogs
  );
  const handleBlogClick = (id) => {
    history.push(`/blogs/${id}`);
  };
  useEffect(() => {
    dispatch(blogActions.getBlogs(currentPageBlogs));
    dispatch(userActions.getUser());
  }, []);
  useEffect(() => {
    dispatch(blogActions.getBlogs(currentPageBlogs));
  }, [newBlogs.newBlogs.length, currentPageBlogs]);

  const handlePaginationClick = (direction) => {
    switch (direction) {
      case "next":
        dispatch(paginationActions.nextPage(currentPageBlogs, "blogs"));
        break;
      case "prev":
        dispatch(paginationActions.prevPage(currentPageBlogs, "blogs"));
        break;
      case "first":
        dispatch(paginationActions.firstPage(currentPageBlogs, "blogs"));
        break;
      case "last":
        dispatch(paginationActions.lastPage(currentPageBlogs, "blogs"));
        break;
      default:
        break;
    }
  };
  return (
    <div className="main-page">
      <div className="navbar">
        <Navbar />
        <UserInfo />
      </div>
      <div className="App-mid">
        <div className="page-header">
          <h5>New Tweet</h5>
        </div>
        <NewBlogBox />
        <div className="spacer"></div>
        {blogs &&
          blogs.map((item, itemIndex) => (
            <BlogBox key={itemIndex} item={item} />
          ))}
        <PaginationComp
          handlePaginationClick={handlePaginationClick}
          currentPage={currentPageBlogs}
          totalPage={totalPageBlogs}
        />
      </div>
    </div>
  );
};

export default Homepage;
