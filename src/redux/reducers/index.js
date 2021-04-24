import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import routeReducer from "./routeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  blog: blogReducer,
  user: userReducer,
});

export default rootReducer;
