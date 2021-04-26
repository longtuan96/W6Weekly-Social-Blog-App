import api from "../api";
import { routeActions } from "./route.action";
import * as types from "../constants/auth.constant";
import { userActions } from "./user.action";
const {
  REGISTER_REQUEST_START,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
  LOGIN_REQUEST_START,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
} = types;

const registerUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST_START, payload: null });
    const res = await api.post("/users", data);

    dispatch(routeActions.redirect("/login"));

    dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: null });
  } catch (err) {
    dispatch({ type: REGISTER_REQUEST_FAIL, payload: null });
    console.log("REGISTER ERROR: ", err.message);
  }
};

const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_START, payload: null });
    const res = await api.post("/auth/login", data);
    dispatch(userActions.getUser());
    localStorage.setItem("accessToken", res.data.data.accessToken);
    localStorage.setItem("isAuthenticated", true);
    // localStorage.setItem("user_name", res.data.data.user.name);
    // localStorage.setItem("user_email", res.data.data.user.email);
    // localStorage.setItem("user_avatarUrl", res.data.data.user.avatarUrl);
    dispatch({ type: "USER_REQUEST_SUCCESS", payload: res.data.data.user });
    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: null });
    dispatch(routeActions.redirect("/home"));
  } catch (err) {
    dispatch({ type: LOGIN_REQUEST_FAIL, payload: null });
    console.log("LOGIN ERROR: ", err.message);
  }
};

export const authActions = { registerUser, loginUser };
