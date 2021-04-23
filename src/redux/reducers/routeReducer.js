import * as types from "../constants/route.constant";
const { REDIRECT_TO, REMOVE_REDIRECT_TO } = types;

const initialState = {
  redirectTo: null,
};

const routeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REDIRECT_TO:
      state.redirectTo = payload;
      break;
    case REMOVE_REDIRECT_TO:
      state.redirectTo = null;
      break;
    default:
      break;
  }
  return { ...state };
};

export default routeReducer;
