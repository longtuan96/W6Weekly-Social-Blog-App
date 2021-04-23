import React from "react";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import api from "../../redux/api";
import { Link } from "react-router-dom";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const Homepage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const getBlogsData = async () => {
    try {
      let url = `/blogs`;
      const res = await api.get(url);
      console.log("what's res", res.data.data);
      setBlogsData(res.data.data.blogs);
    } catch (err) {
      console.log("erro", err.message);
    }
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  return (
    <>
      <div className="container">
        {blogsData &&
          blogsData.map((blogs) => (
            <Link to={`/blogs/${blogs._id}`}>
              <div>
                <div className="blog-img">
                  <img
                    src={blogs.images}
                    alt="blog-img"
                    className="re-size-imgblog"
                  />
                </div>
                <div className="blog-content">
                  <h4>{blogs.title}</h4>
                  <p>{`${blogs.content}`}</p>
                </div>
                <div className="more-infor">
                  <p>
                    {`${blogs.author} wrote 
             ${(<Moment>{blogs.createdAt}</Moment>)}`}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Homepage;
