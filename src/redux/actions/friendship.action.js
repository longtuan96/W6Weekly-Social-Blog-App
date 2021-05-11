import * as types from "../constants/friendship.constant";
import api from "../api";
const getFriendList = () => async (dispatch) => {
  try {
    dispatch({ type: types.FRIENDLIST_REQUEST_START, payload: null });
    const res = await api.get("/friends");

    dispatch({
      type: types.FRIENDLIST_REQUEST_SUCCESS,
      payload: res.data.data.users,
    });
  } catch (err) {
    dispatch({ type: types.FRIENDLIST_REQUEST_FAIL, payload: null });
    console.log("Error in getFriendList", err.message);
  }
};

const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: types.USERS_REQUEST_START, payload: null });
    const res = await api.get("/users?page=1&limit=10");

    dispatch({
      type: types.USERS_REQUEST_SUCCESS,
      payload: res.data.data.users,
    });
  } catch (err) {
    dispatch({ type: types.USERS_REQUEST_FAIL, payload: null });
    console.log("Error in getFriendList", err.message);
  }
};

const getReceiveFriendRequestList = () => async (dispatch) => {
  try {
    dispatch({
      type: types.RECEIVED_FRIENDREQUESTLIST_REQUEST_START,
      payload: null,
    });
    const res = await api.get("/friends/manage");

    dispatch({
      type: types.RECEIVED_FRIENDREQUESTLIST_REQUEST_SUCCESS,
      payload: res.data.data.users,
    });
  } catch (err) {
    dispatch({
      type: types.RECEIVED_FRIENDREQUESTLIST_REQUEST_FAIL,
      payload: null,
    });
  }
};

const getSentFriendRequestList = () => async (dispatch) => {
  try {
    dispatch({
      type: types.SENT_FRIENDREQUESTLIST_REQUEST_START,
      payload: null,
    });
    const res = await api.get("/friends/add");

    dispatch({
      type: types.SENT_FRIENDREQUESTLIST_REQUEST_SUCCESS,
      payload: res.data.data.users,
    });
  } catch (err) {
    dispatch({
      type: types.SENT_FRIENDREQUESTLIST_REQUEST_FAIL,
      payload: null,
    });
    console.log("Error in getReceivedRequestList", err.message);
  }
};

const sendFriendRequest = (user_id) => async (dispatch) => {
  try {
    dispatch({
      type: types.SEND_FRIENDREQUEST_REQUEST_START,
      payload: null,
    });
    const res = await api.post(`/friends/add/${user_id}`);

    dispatch({
      type: types.SEND_FRIENDREQUEST_REQUEST_SUCCESS,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: types.SEND_FRIENDREQUEST_REQUEST_FAIL,
      payload: null,
    });
    console.log("Error in sendFriendRequest", err.message);
  }
};

const cancelRequest = (to_user_id) => async (dispatch) => {
  try {
    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_START,
      payload: null,
    });
    const res = await api.delete(`/friends/add/${to_user_id}`);

    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_SUCCESS,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_FAIL,
      payload: null,
    });
    console.log("Error in sendFriendRequest", err.message);
  }
};

const acceptRequest = (from_user_id) => async (dispatch) => {
  try {
    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_START,
      payload: null,
    });
    const res = await api.post(`/friends/manage/${from_user_id}`);

    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_SUCCESS,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_FAIL,
      payload: null,
    });
    console.log("Error in sendFriendRequest", err.message);
  }
};

const declineRequest = (from_user_id) => async (dispatch) => {
  try {
    dispatch({
      type: types.DENINED_FRIENDREQUEST_REQUEST_START,
      payload: null,
    });
    const res = await api.delete(`/friends/manage/${from_user_id}`);

    dispatch({
      type: types.DENINED_FRIENDREQUEST_REQUEST_SUCCESS,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: types.DENINED_FRIENDREQUEST_REQUEST_FAIL,
      payload: null,
    });
    console.log("Error in sendFriendRequest", err.message);
  }
};

const unfriend = (friend_id) => async (dispatch) => {
  try {
    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_START,
      payload: null,
    });
    const res = await api.delete(`/friends/${friend_id}`);

    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_SUCCESS,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_FRIENDREQUEST_REQUEST_FAIL,
      payload: null,
    });
    console.log("Error in sendFriendRequest", err.message);
  }
};

export const friendShipActions = {
  getFriendList,
  getReceiveFriendRequestList,
  getSentFriendRequestList,
  sendFriendRequest,
  cancelRequest,
  acceptRequest,
  declineRequest,
  unfriend,
  getUsers,
};
