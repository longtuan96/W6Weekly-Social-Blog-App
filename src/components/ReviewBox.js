import moment from "moment";
import React from "react";
import { Media, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { blogActions } from "../redux/actions/blog.action";

const ReviewBox = ({ review }) => {
  const dispatch = useDispatch();
  return (
    <div className="red-border">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={review.user.avatarUrl}
          alt="reviewer avatar"
        />
        <Media.Body>
          <div className="d-flex">
            <h5>{review.user.name}</h5>
            <p>{review.user.email}</p>
            <span>.</span>
            <p>{moment(review.createdAt).format("MMM Do ,YYYY")}</p>
          </div>
          <p>{review.content}</p>
          <div className="d-flex">
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
        </Media.Body>
      </Media>
    </div>
  );
};

export default ReviewBox;
