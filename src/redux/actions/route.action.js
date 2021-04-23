import * as types from "../constants/route.constant";
const { REDIRECT_TO, REMOVE_REDIRECT_TO } = types;

const redirect = (link) => (dispatch) => {
  dispatch({ type: REDIRECT_TO, payload: link });
};

const removeRedirectTo = () => (dispatch) => {
  dispatch({ type: REMOVE_REDIRECT_TO });
};
export const routeActions = { redirect, removeRedirectTo };
