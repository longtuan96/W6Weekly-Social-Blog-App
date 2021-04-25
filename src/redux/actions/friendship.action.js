import * as types from "../constants/friendship.constant";
import api from "../api";
const getFriendList = () => async (dispatch) => {
  try {
    dispatch({ type: types.FRIENDLIST_REQUEST_START, payload: null });
    const res = await api.get("/friends");
    console.log("get friends list: ", res.data.data.users);

    dispatch({
      type: types.FRIENDLIST_REQUEST_SUCCESS,
      payload: res.data.data.users,
    });
  } catch (err) {
    dispatch({ type: types.FRIENDLIST_REQUEST_FAIL, payload: null });
    console.log("Error in getUser", err.message);
  }
};

export const friendShipActions = { getFriendList };
