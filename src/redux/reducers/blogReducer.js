import * as types from "../constants/blog.constant";

const initialState = {
  loading: false,
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.NEWBLOGS_REQUEST_START:
    case types.BLOGS_REQUEST_START:
      state.loading = true;
      break;
    case types.BLOGS_REQUEST_SUCCESS:
      state.loading = false;
      state.blogs = payload;
      break;
    case types.NEWBLOGS_REQUEST_FAIL:
    case types.BLOGS_REQUEST_FAIL:
      state.loading = false;
      break;

    default:
      break;
  }
  console.log("Blog state: ", state);
  return { ...state };
};

export default blogReducer;
