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

    localStorage.setItem("accessToken", res.data.accessToken);
    api.defaults.headers["authorization"] =
      "Bearer " + localStorage.getItem("accessToken");
    localStorage.setItem("isAuthenticated", true);

    dispatch({ type: "USER_REQUEST_SUCCESS", payload: res.data.data.user });
    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data.accessToken });
    dispatch(routeActions.redirect("/home"));
  } catch (err) {
    dispatch({ type: LOGIN_REQUEST_FAIL, payload: null });
    console.log("LOGIN ERROR: ", err.message);
  }
};
const loginWithFacebook = () => async (dispatch) => {
  try {
    await api.post("/auth/login/facebook");
    console.log("facebook clicked");
  } catch (error) {
    console.log("facebook fail");
  }
};

export const authActions = { registerUser, loginUser, loginWithFacebook };
