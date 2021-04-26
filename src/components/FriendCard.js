import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { friendShipActions } from "../redux/actions/friendship.action";

const FriendCard = ({ friend, inPlace }) => {
  const dispatch = useDispatch();
  return (
    <div className="friendCard">
      <img src={friend.avatarUrl} alt="" />
      <h3>{friend.name}</h3>
      <h5>{friend.email}</h5>
      <p>{`Joint on ${moment(friend.createAt).format("MMMM,YYYY")}`}</p>
      <p>{`${friend.friendCount} Friends`}</p>
      {friend.friendship !== null ? (
        friend.friendship.status === "requesting" && inPlace === "sent" ? (
          <button
            onClick={() =>
              dispatch(friendShipActions.cancelRequest(friend._id))
            }
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
          ""
        )
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
  );
};

export default FriendCard;
