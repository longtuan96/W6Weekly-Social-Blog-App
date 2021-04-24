import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogBox from "../../components/BlogBox";
import UserInfo from "../../components/UserInfo";
import { blogActions } from "../../redux/actions/blog.action";
import api from "../../redux/api";
import PublicPagination from "../../components/PublicPagination";

const Homepage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // localStorage.clear()
  const blogs = useSelector((state) => state.blog.blogs);

  const handleClick = () => {};
  useEffect(() => {
    dispatch(blogActions.getBlogs(page));
  }, [page]);

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
        {blogs && blogs.map((item) => <BlogBox item={item} />)}
      </div>
      <div className="col-3"></div>
      <PublicPagination page={page} setPage={setPage} />
    </div>
  );
};

export default Homepage;
