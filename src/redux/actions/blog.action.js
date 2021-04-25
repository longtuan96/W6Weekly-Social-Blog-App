import { useSelector } from "react-redux";
import api from "../api";
import * as types from "../constants/blog.constant";
import { routeActions } from "./route.action";

const getBlogs = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: types.BLOGS_REQUEST_START, payload: null });
    const res = await api.get(`/blogs?page=${currentPage}&limit=10`);
    console.log("get Blogs result: ", res.data.data.blogs);
    dispatch({
      type: "GET_TOTALPAGE",
      payload: { totalPage: res.data.data.totalPages, place: "blogs" },
    });
    dispatch({
      type: types.BLOGS_REQUEST_SUCCESS,
      payload: res.data.data.blogs,
    });
  } catch (err) {
    dispatch({ type: types.BLOGS_REQUEST_FAIL, payload: null });
    console.log("Error in getBlogs", err.message);
  }
};

const newBlog = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.NEWBLOGS_REQUEST_START, payload: null });
    const res = await api.post("/blogs", data);
    console.log("new Blogs!!! ");
    dispatch(routeActions.redirect("/home"));
    dispatch({
      type: types.NEWBLOGS_REQUEST_SUCCESS,
      payload: data,
    });
    console.log("new Blog uploaded!!!");
  } catch (error) {
    dispatch({ type: types.BLOGS_REQUEST_FAIL, payload: null });
    console.log("Error in newBlog: ", error.message);
  }
};

const updateBlog = (data, id) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATEBLOGS_REQUEST_START, payload: null });
    const res = await api.put(`/blogs/${id}`, data);
    console.log("update Blogs!!! ");
    dispatch(routeActions.redirect("/home"));
    dispatch({
      type: types.UPDATEBLOGS_REQUEST_SUCCESS,
      payload: data,
    });
    console.log("updated Blog uploaded!!!");
  } catch (error) {
    dispatch({ type: types.BLOGS_REQUEST_FAIL, payload: null });
    console.log("Error in updateBlog: ", error.message);
  }
};

const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETEBLOGS_REQUEST_START, payload: null });
    const res = await api.delete(`/blogs/${id}`);
    console.log("start delete Blog!!! ");
    dispatch(routeActions.redirect("/home"));
    dispatch({
      type: types.DELETEBLOGS_REQUEST_SUCCESS,
      payload: null,
    });
    console.log("deleted Blog!!!");
  } catch (error) {
    dispatch({ type: types.DELETEBLOGS_REQUEST_FAIL, payload: null });
    console.log("Error in deleteBlog: ", error.message);
  }
};

const getSingleBlog = (id, currentPage) => async (dispatch) => {
  try {
    dispatch({ type: types.SINGLEBLOG_REQUEST_START, payload: null });
    let url = `/blogs/${id}?page=${currentPage}&limit=10`;
    let res = await api.get(url);
    dispatch({
      type: types.SINGLEBLOG_REQUEST_SUCCESS,
      payload: res.data.data,
    });
    dispatch({
      type: "GET_TOTALPAGE",
      payload: {
        totalPage: Math.ceil(res.data.data.reviewCount / 10),
        place: "reviews",
      },
    });
    console.log("singleblog data: ", res.data.data);
  } catch (error) {
    dispatch({ type: types.SINGLEBLOG_REQUEST_FAIL, payload: null });
    console.log("error", error.message);
  }
};
const reactionClick = (type, id, emoji) => async (dispatch) => {
  try {
    let data = { targetType: type, targetId: id, emoji: emoji };
    let url = `/reactions`;
    let res = await api.post(url, data);
  } catch (error) {
    console.log("error", error.message);
  }
};
const newReview = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: types.NEWREVIEW_REQUEST_START, payload: null });
    const res = await api.post(`reviews/blogs/${id}`, data);
    console.log("new review!!! ");

    dispatch({
      type: types.NEWREVIEW_REQUEST_SUCCESS,
      payload: data,
    });
    console.log("new review uploaded!!!");
  } catch (error) {
    dispatch({ type: types.NEWREVIEW_REQUEST_FAIL, payload: null });
    console.log("Error in newReview: ", error.message);
  }
};

export const blogActions = {
  getBlogs,
  newBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  reactionClick,
  newReview,
};
