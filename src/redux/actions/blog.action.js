import api from "../api";
import * as types from "../constants/blog.constant";
import { routeActions } from "./route.action";

const getBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: types.BLOGS_REQUEST_START, payload: null });
    const res = await api.get("/blogs");
    console.log("get Blogs result: ", res.data.data.blogs);

    dispatch({
      type: types.BLOGS_REQUEST_SUCCESS,
      payload: res.data.data.blogs,
    });
  } catch (err) {
    dispatch({ type: types.BLOGS_REQUEST_FAIL, payload: null });
    console.log(err.message);
  }
};

const newBlog = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.NEWBLOGS_REQUEST_START, payload: null });
    const res = await api.post("/blogs", data);
    console.log("new Blogs!!! ");
    dispatch(routeActions.redirect("/"));
    dispatch({
      type: types.NEWBLOGS_REQUEST_SUCCESS,
      payload: null,
    });
    console.log("new Blog uploaded!!!");
  } catch (error) {
    console.log("Error in newBlog: ", error.message);
  }
};

export const blogActions = { getBlogs, newBlog };
