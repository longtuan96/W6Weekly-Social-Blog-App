import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { friendShipActions } from "../redux/actions/friendship.action";

const FriendCard = ({ friend, inPlace }) => {
  const dispatch = useDispatch();
  return (
    <div className="friendCard tweet">
      <div className="tweet-left">
        <img className="tweet-img" src={friend.avatarUrl} alt="" />
      </div>
      <div className="tweet-right tweet-content">
        <h5 className="tweet-user-name">{friend.name}</h5>
        <p className="tweet-user-email">{friend.email}</p>
        <p>{`Joined on ${moment(friend.createAt).format("MMMM,YYYY")}`}</p>
        <p>{`${friend.friendCount} Friends`}</p>
        {friend.friendship.status === "requesting" && inPlace === "sent" ? (
          <button
            onClick={() => dispatch(friendShipActions.cancelRequest(friend._id))}
          >
            Cancel Request
          </button>
        ) : friend.friendship.status === "requesting" &&
          inPlace === "received" ? (
          <div>
            <button
              onClick={() =>
                dispatch(friendShipActions.acceptRequest(friend._id))
              }
            >
              Accept
          </button>
            <button
              onClick={() =>
                dispatch(friendShipActions.declineRequest(friend._id))
              }
            >
              Decline
          </button>
          </div>
        ) : friend.friendship.status === "accepted" ? (
          <button
            onClick={() => dispatch(friendShipActions.unfriend(friend._id))}
          >
            Unfriend
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(friendShipActions.sendFriendRequest(friend._id))
            }
          >
            Add friend
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
