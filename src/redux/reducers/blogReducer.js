import * as types from "../constants/blog.constant";

const initialState = {
  loadingBlogs: true,
  loadingSingleBlog: true,
  blogs: [],
  newBlogs: [],
  singleBlog: {},
  newSingleBlog: {},
  reviews: [],
  newReview: {},
  currentPageBlogs: 0,
  currentPageReviews: 0,
  imgUrlNewBlog: "",
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SINGLEBLOG_REQUEST_START:
    case types.DELETEBLOGS_REQUEST_START:
    case types.NEWBLOGS_REQUEST_START:
    case types.BLOGS_REQUEST_START:
      state.loadingBlogs = true;
      break;

    case types.BLOGS_REQUEST_SUCCESS:
      state.blogs = payload;
      state.loadingBlogs = false;

      break;
    case types.DELETEBLOGS_REQUEST_SUCCESS:
    case types.UPDATEBLOGS_REQUEST_SUCCESS:
    case types.NEWBLOGS_REQUEST_SUCCESS:
      state.newBlogs.push(payload);
      state.loading = false;

      break;
    case types.SINGLEBLOG_REQUEST_SUCCESS:
      state.singleBlog = payload;
      state.loadingSingleBlog = false;

      break;

    case types.DELETEBLOGS_REQUEST_FAIL:
    case types.NEWBLOGS_REQUEST_FAIL:
    case types.BLOGS_REQUEST_FAIL:
    case types.UPDATEBLOGS_REQUEST_FAIL:
      state.loadingBlogs = false;
      break;
    case "UPLOAD_IMG":
      state.imgUrlNewBlog = payload;
      break;
    default:
      break;
  }
  console.log("Blog state: ", state);
  return { ...state };
};

export default blogReducer;
