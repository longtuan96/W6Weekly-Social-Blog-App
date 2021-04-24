import * as types from "../constants/pagination.constant";

const initialState = {
  currentPageBlogs: 1,
  totalPageBlogs: 0,
  currentPageReviews: 1,
  totalPageReviews: 0,
};

const paginationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.NEXT_PAGE:
      payload.place === "blogs"
        ? state.currentPageBlogs++
        : state.currentPageReviews++;
      break;
    case types.PREV_PAGE:
      payload.place === "blogs"
        ? state.currentPageBlogs--
        : state.currentPageReviews--;
      break;
    case types.FIRST_PAGE:
      payload.place === "blogs"
        ? (state.currentPageBlogs = 1)
        : (state.currentPageReviews = 1);
      break;
    case types.LAST_PAGE:
      payload.place === "blogs"
        ? (state.currentPageBlogs = state.totalPageBlogs)
        : (state.currentPageReviews = state.totalPageReviews);
      break;
    case types.GET_TOTALPAGE:
      payload.place === "blogs"
        ? (state.totalPageBlogs = payload.totalPage)
        : (state.totalPageReviews = payload.totalPage);
      break;
    default:
      break;
  }
  console.log("page state: ", state);
  return { ...state };
};

export default paginationReducer;
