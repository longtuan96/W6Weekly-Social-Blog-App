import axios from "axios";
import { useSelector } from "react-redux";
import React from "react";

import { initialState } from "./reducers/authReducer";
const accessToken = localStorage.getItem("accessToken");
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API + "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    let errorMsg = error.message || "";
    if (error.errors && error.errors.message)
      errorMsg = errorMsg + ": " + error.errors.message;

    return Promise.reject(error);
  }
);

export default api;
