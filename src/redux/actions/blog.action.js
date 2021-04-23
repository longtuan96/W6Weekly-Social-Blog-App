import api from "../api";
import * as types from "../constants/blog.constant";
const {
  BLOGS_REQUEST_START,
  BLOGS_REQUEST_SUCCESS,
  BLOGS_REQUEST_FAIL,
} = types;

const getBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_REQUEST_START, payload: null });
    const res = await api.get("/blogs");
    console.log("get Blogs result: ", res.data.data.blogs);

    dispatch({ type: BLOGS_REQUEST_SUCCESS, payload: res.data.data.blogs });
  } catch (err) {
    dispatch({ type: BLOGS_REQUEST_FAIL, payload: null });
    console.log(err.message);
  }
};

export const blogActions = { getBlogs };
