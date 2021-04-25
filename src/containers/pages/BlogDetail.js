import React from "react";
import api from "../../redux/api";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../../redux/actions/blog.action";

import moment from "moment";
import { Button, Badge } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox";
import PaginationComp from "../../components/PaginationComp";
import { paginationActions } from "../../redux/actions/pagination.action";
import NewReviewBox from "../../components/NewReviewBox";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const singleBlog = useSelector((state) => state.blog.singleBlog);
  const loadingSingleBlog = useSelector(
    (state) => state.blog.loadingSingleBlog
  );

  const { blog_id } = useParams();
  const handleGoBack = () => {
    history.goBack();
  };
  const totalPageReviews = useSelector(
    (state) => state.pagination.totalPageReviews
  );
  const currentPageReviews = useSelector(
    (state) => state.pagination.currentPageReviews
  );
  const handlePaginationClick = (direction) => {
    switch (direction) {
      case "next":
        dispatch(paginationActions.nextPage(currentPageReviews, "reviews"));
        break;
      case "prev":
        dispatch(paginationActions.prevPage(currentPageReviews, "reviews"));
        break;
      case "first":
        dispatch(paginationActions.firstPage(currentPageReviews, "reviews"));
        break;
      case "last":
        dispatch(paginationActions.lastPage(currentPageReviews, "reviews"));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(blogActions.getSingleBlog(blog_id, currentPageReviews));
  }, [currentPageReviews]);
  return (
    <div className="main-page">
      {loadingSingleBlog ? (
        <h1>LOADING</h1>
      ) : (
        <div className="App-mid">
          <button onClick={handleGoBack}>Back</button>
          <img
            className="tweet-img"
            src={
              singleBlog.author.avatarUrl
                ? singleBlog.author.avatarUrl
                : "profile.jpg"
            }
            alt="user-avatar"
          />
          {/* <img src={singleBlog.author.avatarUrl} alt="user avatar" /> */}
          <div>
            <h1>{singleBlog.author.name}</h1>
            <p>{singleBlog.author.email}</p>
            <h3>{singleBlog.title}</h3>
            <p>{singleBlog.content}</p>
            <p>
              {moment(singleBlog.createdAt).format("h:mm a . MMM Do ,YYYY")}
            </p>
            {singleBlog.images.length !== 0
              ? singleBlog.images.map((item) => (
                  <img src={item} alt="user images" />
                ))
              : ""}
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
            <NewReviewBox id={singleBlog._id} />
            <div>
              {singleBlog.reviews.map((item) => (
                <ReviewBox review={item} />
              ))}
            </div>
            {singleBlog.reviewCount <= 10 ? (
              ""
            ) : (
              <PaginationComp
                handlePaginationClick={handlePaginationClick}
                currentPage={currentPageReviews}
                totalPage={totalPageReviews}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
