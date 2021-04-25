import * as types from "../constants/friendship.constant";

const initialState = {
  loadingFriends: true,
  friends: [],
};

const friendShipReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
  console.log("friends state: ", state);
  return { ...state };
};

export default friendShipReducer;
