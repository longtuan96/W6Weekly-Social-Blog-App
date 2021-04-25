import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendShipActions } from "../../redux/actions/friendship.action";
import { userActions } from "../../redux/actions/user.action";

const Profilepage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loadingUser = useSelector((state) => state.user.loadingUser);
  const friendlist = useSelector((state) => state.friendship.friendlist);
  const loadingFriends = useSelector(
    (state) => state.friendship.loadingFriends
  );
  useEffect(() => {
    dispatch(userActions.getUser());
    dispatch(friendShipActions.getFriendList());
  }, []);
  return (
    <div>
      {loadingUser ? (
        <h1>LOADING</h1>
      ) : (
        <div>
          <h3>{user.name}</h3>
          <h5>{user.email}</h5>
          <p>{`Joined on ${moment(user.createdAt).format("MMMM,YYYY")}`}</p>
          <img src={user.avatarUrl} alt="" />
          <p>{`${user.friendCount} friends`}</p>

          <div id="friendsTAB">
            <div id="friendCARD"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilepage;
