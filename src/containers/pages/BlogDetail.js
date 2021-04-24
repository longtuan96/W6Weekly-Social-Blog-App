import React from "react";
import api from "../../redux/api";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../../redux/actions/blog.action";

import moment from "moment";
import { Button, Badge } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const singleBlog = useSelector((state) => state.blog.singleBlog);
  const loading = useSelector((state) => state.blog.loading);

  const { blog_id } = useParams();
  const handleGoBack = () => {
    history.goBack();
  };
  useEffect(() => {
    dispatch(blogActions.getSingleBlog(blog_id));
  }, []);
  return (
    <div>
      {loading ? (
        <h1>LOADING</h1>
      ) : (
        <div>
          <button onClick={handleGoBack}>Back</button>
          <img src={singleBlog.author.avatarUrl} alt="user avatar" />
          <div>
            <h1>{singleBlog.author.name}</h1>
            <p>{singleBlog.author.email}</p>
            <h3>{singleBlog.title}</h3>
            <p>{singleBlog.content}</p>
            <p>
              {moment(singleBlog.createdAt).format("h:mm a . MMM Do ,YYYY")}
            </p>
            <div className="d-flex">
              <Button
                name="angry"
                onClick={(e) =>
                  dispatch(
                    blogActions.reactionClick(
                      "Blog",
                      singleBlog._id,
                      e.target.name
                    )
                  )
                }
              >
                Angry{" "}
                <Badge variant="light">{singleBlog.reactions.angry}</Badge>
              </Button>
              <Button
                name="laugh"
                onClick={(e) =>
                  dispatch(
                    blogActions.reactionClick(
                      "Blog",
                      singleBlog._id,
                      e.target.name
                    )
                  )
                }
              >
                Laugh{" "}
                <Badge variant="light">{singleBlog.reactions.laugh}</Badge>
              </Button>
              <Button
                name="like"
                onClick={(e) =>
                  dispatch(
                    blogActions.reactionClick(
                      "Blog",
                      singleBlog._id,
                      e.target.name
                    )
                  )
                }
              >
                Like <Badge variant="light">{singleBlog.reactions.like}</Badge>
              </Button>
              <Button
                name="love"
                onClick={(e) =>
                  dispatch(
                    blogActions.reactionClick(
                      "Blog",
                      singleBlog._id,
                      e.target.name
                    )
                  )
                }
              >
                Love <Badge variant="light">{singleBlog.reactions.love}</Badge>
              </Button>
              <Button
                name="sad"
                onClick={(e) =>
                  dispatch(
                    blogActions.reactionClick(
                      "Blog",
                      singleBlog._id,
                      e.target.name
                    )
                  )
                }
              >
                Sad <Badge variant="light">{singleBlog.reactions.sad}</Badge>
              </Button>
            </div>
            <p>{singleBlog.reviewCount} reviews</p>
            <div>
              {singleBlog.reviews.map((item) => (
                <ReviewBox review={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
