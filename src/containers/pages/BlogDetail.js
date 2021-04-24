import React from "react";
import { useState, useEffect } from "react";
import PublicPagination from "../../components/PublicPagination";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../../redux/actions/blog.action";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { blog_id } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const singleBlog = useSelector((state) => state.blog.singleBlog);
  const reviews = useSelector((state) => state.blog.reviews);
  useEffect(() => {
    dispatch(blogActions.getSingleBlog(blog_id));
    dispatch(blogActions.getReviews(blog_id, page));
  }, [page]);

  return (
    <div>
      <h1>this is detail blog yeahhh</h1>
      <h1>{singleBlog && singleBlog.title}</h1>
      <h1>Review part</h1>
      <p>{reviews && reviews.content}</p>
      <PublicPagination page={page} setPage={setPage} />
    </div>
  );
};

export default BlogDetail;
