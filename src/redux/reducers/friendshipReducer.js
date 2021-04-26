import * as types from "../constants/friendship.constant";

const initialState = {
  loadingFriends: true,
  loadingReceivedRequest: true,
  loadingSentRequest: true,
  loadingUsers: true,
  friends: [],
  receivedFriendRequestList: [],
  sentFriendRequestList: [],
  users: [],
  array: [],
};

const friendShipReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SENT_FRIENDREQUESTLIST_REQUEST_START:
    case types.FRIENDLIST_REQUEST_START:
      state.loadingFriends = true;

      break;
    case types.FRIENDLIST_REQUEST_SUCCESS:
      state.loadingFriends = false;
      state.friends = payload;

      break;
    case types.FRIENDLIST_REQUEST_FAIL:
      state.loadingFriends = false;
      break;
    default:
      break;
  }
  switch (type) {
    case types.RECEIVED_FRIENDREQUESTLIST_REQUEST_START:
      state.loadingReceivedRequest = true;
      break;
    case types.RECEIVED_FRIENDREQUESTLIST_REQUEST_SUCCESS:
      state.loadingReceivedRequest = false;
      state.receivedFriendRequestList = payload;
      break;
    case types.RECEIVED_FRIENDREQUESTLIST_REQUEST_FAIL:
      state.loadingReceivedRequest = false;
      break;

    default:
      break;
  }
  switch (type) {
    case types.SENT_FRIENDREQUESTLIST_REQUEST_START:
      state.loadingSentRequest = true;
      break;
    case types.SENT_FRIENDREQUESTLIST_REQUEST_SUCCESS:
      state.loadingSentRequest = false;
      state.sentFriendRequestList = payload;
      break;
    case types.SENT_FRIENDREQUESTLIST_REQUEST_FAIL:
      state.loadingSentRequest = false;
      break;

    default:
      break;
  }
  switch (type) {
    case types.USERS_REQUEST_START:
      state.loadingUsers = true;
      break;
    case types.USERS_REQUEST_SUCCESS:
      state.loadingUsers = false;
      state.users = payload;
      break;
    case types.USERS_REQUEST_FAIL:
      state.loadingUsers = false;
      break;
    case types.REMOVE_FRIENDREQUEST_REQUEST_SUCCESS:
    case types.REMOVE_FRIEND_REQUEST_SUCCESS:
    case types.SEND_FRIENDREQUEST_REQUEST_SUCCESS:
    case types.ACCEPT_FRIENDREQUEST_REQUEST_SUCCESS:
    case types.DENINED_FRIENDREQUEST_REQUEST_SUCCESS:
      state.array.push(payload);
      break;
    default:
      break;
  }
  console.log("friends state: ", state);
  return { ...state };
};

export default friendShipReducer;
