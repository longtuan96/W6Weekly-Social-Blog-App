import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import paginationReducer from "./paginationReducer";
import routeReducer from "./routeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  blog: blogReducer,
  user: userReducer,
  pagination: paginationReducer,
});

export default rootReducer;
