import * as types from "../constants/user.constant";

const initialState = {
  user: {},
  loadingUser: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_REQUEST_START:
      state.loadingUser = true;
      state.user = {};
      break;
    case types.USER_REQUEST_SUCCESS:
      state.loadingUser = false;
      state.user = payload;
      break;
    case types.USER_REQUEST_FAIL:
      state.loadingUser = false;
      break;
    default:
      break;
  }
  console.log("state user: ", state);
  return { ...state };
};

export default userReducer;
