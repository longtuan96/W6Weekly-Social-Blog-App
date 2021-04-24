import * as types from "../constants/pagination.constant";

const nextPage = (currentPage, place) => (dispatch) => {
  dispatch({
    type: types.NEXT_PAGE,
    payload: { currentPage: currentPage, place: place },
  });
};
const prevPage = (currentPage, place) => (dispatch) => {
  dispatch({
    type: types.PREV_PAGE,
    payload: { currentPage: currentPage, place: place },
  });
};
const firstPage = (currentPage, place) => (dispatch) => {
  dispatch({
    type: types.FIRST_PAGE,
    payload: { currentPage: currentPage, place: place },
  });
};
const lastPage = (currentPage, place) => (dispatch) => {
  dispatch({
    type: types.LAST_PAGE,
    payload: { currentPage: currentPage, place: place },
  });
};

export const paginationActions = { nextPage, prevPage, firstPage, lastPage };
