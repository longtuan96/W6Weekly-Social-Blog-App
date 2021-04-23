import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import routeReducer from "./routeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  blog: blogReducer,
});

export default rootReducer;
