import api from "../api";
import * as types from "../constants/blog.constant";
const {
  BLOGS_REQUEST_START,
  BLOGS_REQUEST_SUCCESS,
  BLOGS_REQUEST_FAIL,
  SINGLEBLOG_REQUEST_START,
  SINGLEBLOG_REQUEST_FAIL,
  SINGLEBLOG_REQUEST_SUCCESS,
  REVIEWS_REQUEST_START,
  REVIEWS_REQUEST_SUCCESS,
  REVIEWS_REQUEST_FAIL,
} = types;

const getBlogs = (page) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_REQUEST_START, payload: null });
    const res = await api.get(`/blogs?page=${page}`);
    console.log("get Blogs result: ", res.data.data.blogs);
    dispatch({ type: BLOGS_REQUEST_SUCCESS, payload: res.data.data.blogs });
  } catch (err) {
    dispatch({ type: BLOGS_REQUEST_FAIL, payload: null });
    console.log(err.message);
  }
};
const getSingleBlog = (blog_id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLEBLOG_REQUEST_START, payload: null });
    const res = await api.get(`blogs/${blog_id}`);
    console.log("what's sigleblog", res.data.data);
    dispatch({ type: SINGLEBLOG_REQUEST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: SINGLEBLOG_REQUEST_FAIL, payload: null });
    console.log("error", error.message);
  }
};
const getReviews = (blog_id, page) => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_REQUEST_START, payload: null });
    let url = `reviews/blogs/${blog_id}?page=${page}&limit=10`;
    const res = await api.get(url);
    console.log("this is review", res.data.data.reviews);
    dispatch({ type: REVIEWS_REQUEST_SUCCESS, payload: res.data.data.reviews });
  } catch (error) {
    console.log("erro", error.message);
    dispatch({ type: REVIEWS_REQUEST_FAIL, payload: null });
  }
};
const createReview = (blog_id, page) => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_REQUEST_START, payload: null });
    let url = `reviews/blogs/${blog_id}?page=${page}&limit=10`;
    const res = await api.post(url);
    console.log("this is review", res.data.data.reviews);
    dispatch({ type: REVIEWS_REQUEST_SUCCESS, payload: res.data.data.reviews });
  } catch (error) {
    console.log("erro", error.message);
    dispatch({ type: REVIEWS_REQUEST_FAIL, payload: null });
  }
};
export const blogActions = {
  getBlogs,
  getSingleBlog,
  getReviews,
  createReview,
};
