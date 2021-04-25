import moment from "moment";
import React from "react";
import { Media, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { blogActions } from "../redux/actions/blog.action";

const ReviewBox = ({ review }) => {
  const dispatch = useDispatch();
  return (
    <div className="tweet">
      <div className="tweet-left">
        <img
          className="tweet-img"
          src={review.user.avatarUrl ? review.user.avatarUrl : "profile.jpg"}
          alt="user-avatar"
        />
      </div>
      <div className="tweet-right tweet-content">
        <div className="tweet-header">
          <div className="tweet-header-left">
            <h5 className="tweet-user-name">{review.user.name}</h5>
            <p className="tweet-user-email">{review.user.email}</p>
          </div>

          <p className="tweet-user-email">{moment(review.createdAt).format("MMM Do YYYY")}</p>
        </div>

        <p>{review.content}</p>
        <div className="d-flex reactions">
          <Button
            name="angry"
            onClick={(e) =>
              dispatch(
                blogActions.reactionClick("Review", review._id, e.target.name)
              )
            }
          >
            Angry <Badge variant="light">{review.reactions.angry}</Badge>
          </Button>
          <Button
            name="laugh"
            onClick={(e) =>
              dispatch(
                blogActions.reactionClick("Review", review._id, e.target.name)
              )
            }
          >
            Laugh <Badge variant="light">{review.reactions.laugh}</Badge>
          </Button>
          <Button
            name="like"
            onClick={(e) =>
              dispatch(
                blogActions.reactionClick("Review", review._id, e.target.name)
              )
            }
          >
            Like <Badge variant="light">{review.reactions.like}</Badge>
          </Button>
          <Button
            name="love"
            onClick={(e) =>
              dispatch(
                blogActions.reactionClick("Review", review._id, e.target.name)
              )
            }
          >
            Love <Badge variant="light">{review.reactions.love}</Badge>
          </Button>
          <Button
            name="sad"
            onClick={(e) =>
              dispatch(
                blogActions.reactionClick("Review", review._id, e.target.name)
              )
            }
          >
            Sad <Badge variant="light">{review.reactions.sad}</Badge>
          </Button>
        </div>

      </div>


    </div>
  );
};

export default ReviewBox;
