import * as types from "../constants/blog.constant";
const {
  BLOGS_REQUEST_START,
  BLOGS_REQUEST_SUCCESS,
  BLOGS_REQUEST_FAIL,
} = types;
const initialState = {
  loading: false,
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOGS_REQUEST_START:
      state.loading = true;
      break;
    case BLOGS_REQUEST_SUCCESS:
      state.loading = false;
      state.blogs = payload;
      break;

    case BLOGS_REQUEST_FAIL:
      state.loading = false;
      break;

    default:
      break;
  }
  console.log("Blog state: ", state);
  return { ...state };
};

export default blogReducer;
