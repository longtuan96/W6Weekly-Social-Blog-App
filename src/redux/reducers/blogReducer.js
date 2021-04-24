import * as types from "../constants/blog.constant";

const initialState = {
  loading: true,
  blogs: [],
  newBlogs: [],
  singleBlog: null,
  reviews: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SINGLEBLOG_REQUEST_START:
    case types.DELETEBLOGS_REQUEST_START:
    case types.NEWBLOGS_REQUEST_START:
    case types.BLOGS_REQUEST_START:
      state.loading = true;
      break;

    case types.BLOGS_REQUEST_SUCCESS:
      state.loading = false;
      state.blogs = payload;
      break;
    case types.UPDATEBLOGS_REQUEST_SUCCESS:
    case types.NEWBLOGS_REQUEST_SUCCESS:
      state.loading = false;
      state.newBlogs = payload;
      break;
    case types.SINGLEBLOG_REQUEST_SUCCESS:
      state.loading = false;
      state.singleBlog = payload;
      break;

    case types.DELETEBLOGS_REQUEST_FAIL:
    case types.NEWBLOGS_REQUEST_FAIL:
    case types.BLOGS_REQUEST_FAIL:
    case types.UPDATEBLOGS_REQUEST_FAIL:
      state.loading = false;
      break;

    default:
      break;
  }
  console.log("Blog state: ", state);
  return { ...state };
};

export default blogReducer;
