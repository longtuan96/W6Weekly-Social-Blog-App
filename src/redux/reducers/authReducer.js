import { authActions } from "../actions/auth.action";
import * as types from "../constants/auth.constant";
const initialState = {
  loading: false,
  isAuthenticated: false,
  imgUrl: "",
};
const {
  REGISTER_REQUEST_START,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
  LOGIN_REQUEST_START,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
} = types;
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST_START:
      state.loading = true;
      break;
    case REGISTER_REQUEST_SUCCESS:
      state.loading = false;
      console.log(" register success!!!");
      break;
    case REGISTER_REQUEST_FAIL:
      state.loading = false;
      // set the error messange
      break;

    case LOGIN_REQUEST_START:
      state.loading = true;
      break;
    case LOGIN_REQUEST_SUCCESS:
      state.loading = false;
      state.isAuthenticated = true;
      console.log("log in success!!!");
      break;
    case LOGIN_REQUEST_FAIL:
      state.loading = false;
      // set the error messange
      break;
    case "UPLOAD_AVATAR":
      state.imgUrl = payload;
      // set the error messange
      break;
    default:
      break;
  }
  console.log("auth state:", state);
  return { ...state };
};

export default authReducer;
