import * as types from "../constants/user.constant";

const initialState = {
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_REQUEST_START:
      state.loading = true;
      break;
    case types.USER_REQUEST_SUCCESS:
      state.loading = false;
      state.user = payload;
      break;
    case types.USER_REQUEST_FAIL:
      state.loading = false;
      break;
    default:
      break;
  }
  console.log("state user: ", state);
  return { ...state };
};

export default userReducer;
