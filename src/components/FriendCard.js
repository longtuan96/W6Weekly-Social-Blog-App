import moment from "moment";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div className="friendCard">
      <img src={friend.avatarUrl} alt="" />
      <h3>{friend.name}</h3>
      <h5>{friend.email}</h5>
      <p>{`Joint on ${moment(friend.createAt).format("MMMM,YYYY")}`}</p>
      <p>{`${friend.friendCount} Friends`}</p>
      {friend.friendship.status === "requesting" ? (
        <button>Requesting</button>
      ) : (
        <button>Add friend</button>
      )}
    </div>
  );
};

export default FriendCard;
