import { createStore, applyMiddleware } from "redux";
import blogReducer from "../reducer/blogReducer";
import thunk from "redux-thunk";
const store = createStore(blogReducer, applyMiddleware(thunk));
export default store;
