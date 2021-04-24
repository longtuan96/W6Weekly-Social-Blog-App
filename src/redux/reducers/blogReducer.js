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
const initialState = {
  loading: false,
  blogs: [],
  singleBlog: {},
  reviews: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOGS_REQUEST_START:
    case SINGLEBLOG_REQUEST_START:
    case REVIEWS_REQUEST_START:
      state.loading = true;
      break;
    case BLOGS_REQUEST_SUCCESS:
    case SINGLEBLOG_REQUEST_SUCCESS:
    case REVIEWS_REQUEST_SUCCESS:
      state.loading = false;
      state.blogs = payload;
      state.singleBlog = payload;
      state.reviews = payload;
      break;

    case BLOGS_REQUEST_FAIL:
    case SINGLEBLOG_REQUEST_FAIL:
    case REVIEWS_REQUEST_FAIL:
      state.loading = false;
      break;

    default:
      break;
  }
  console.log("Blog state: ", state);
  return { ...state };
};

export default blogReducer;
