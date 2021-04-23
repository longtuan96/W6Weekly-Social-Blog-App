import api from "../api";
import { routeActions } from "./route.action";
import * as types from "../constants/auth.constant";
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
    console.log("Register result: ", res);
    dispatch(routeActions.redirect("/login"));

    dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: null });
  } catch (err) {
    dispatch({ type: REGISTER_REQUEST_FAIL, payload: null });
    console.log(err.message);
  }
};

const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_START, payload: null });
    const res = await api.post("/auth/login", data);
    console.log("Log in: ", res);
    localStorage.setItem("accessToken", res.data.data.accessToken);
    localStorage.setItem("isAuthenticated", true);

    dispatch(routeActions.redirect("/"));

    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: null });
  } catch (err) {
    dispatch({ type: LOGIN_REQUEST_FAIL, payload: null });
    console.log(err.message);
  }
};

export const authActions = { registerUser, loginUser };
