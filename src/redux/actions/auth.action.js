import api from "../api";
import { routeActions } from "./route.action";

const registerUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST_START", payload: null });
    const res = await api.post("/users", data);

    dispatch(routeActions.redirect("/login"));

    dispatch({ type: "REGISTER_REQUEST_SUCCESS", payload: null });
  } catch (err) {
    dispatch({ type: "REGISTER_REQUEST_FAIL", payload: null });
    console.log(err.message);
  }
};

export const authActions = { registerUser };
