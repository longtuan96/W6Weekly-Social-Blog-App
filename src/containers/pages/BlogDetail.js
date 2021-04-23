import React from "react";
import api from "../../redux/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const BlogDetail = () => {
  const [singleBlog, setSingleBlog] = useState([]);
  const { blog_id } = useParams();
  const getSingleBlog = async () => {
    try {
      let url = `blogs/${blog_id}`;
      let res = await api.get(url);
      console.log("what's sigleblog", res.data.data);
      setSingleBlog(res.data.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  useEffect(() => {
    getSingleBlog();
  }, []);
  return (
    <>
      <h1>this is detail blog yeahhh</h1>

      <p>{singleBlog && singleBlog.content}</p>
      {/* <h1>
        {singleBlog &&
          singleBlog.reviews.map((review) => (
            <>
              <p>{review.title}</p>
              <p>{review.title}</p>
            </>
          ))}
      </h1> */}
    </>
  );
};

export default BlogDetail;
