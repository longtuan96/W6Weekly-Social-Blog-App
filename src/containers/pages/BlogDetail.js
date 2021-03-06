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
    <div className="main-page details-page">
      {loadingSingleBlog ? (
        <h1>LOADING</h1>
      ) : (
        <div className="App-mid">
          <div className="page-header">
            <a className="custom-link" onClick={handleGoBack}>
              <span class="material-icons">arrow_back</span>
            </a>
            <h5>Tweet</h5>
          </div>

          <div className="tweet">
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
            <div className="tweet-right">
              <div className="tweet-header-left">
                <h5 className="tweet-user-name">{singleBlog.author.name}</h5>
                <p className="tweet-user-email">{singleBlog.author.email}</p>
              </div>
              <h3>{singleBlog.title}</h3>
              <p className="tweet-text">{singleBlog.content}</p>

              {singleBlog.images.length !== 0
                ? singleBlog.images.map((item) => (
                    <div className="img-box">
                      <img src={item} alt="user images" />
                    </div>
                  ))
                : ""}
              <p className="tweet-user-email">
                {moment(singleBlog.createdAt).format("h:mm a ??? MMM Do, YYYY")}
              </p>
              <div className="d-flex reactions">
                <Button
                  name="angry"
                  onClick={async (e) => {
                    await dispatch(
                      blogActions.reactionClick(
                        "Blog",
                        singleBlog._id,
                        e.target.name
                      )
                    );
                    dispatch(
                      blogActions.getSingleBlog(blog_id, currentPageReviews)
                    );
                  }}
                >
                  Angry{" "}
                  <Badge variant="light">{singleBlog.reactions.angry}</Badge>
                </Button>
                <Button
                  name="laugh"
                  onClick={async (e) => {
                    await dispatch(
                      blogActions.reactionClick(
                        "Blog",
                        singleBlog._id,
                        e.target.name
                      )
                    );
                    dispatch(
                      blogActions.getSingleBlog(blog_id, currentPageReviews)
                    );
                  }}
                >
                  Laugh{" "}
                  <Badge variant="light">{singleBlog.reactions.laugh}</Badge>
                </Button>
                <Button
                  name="like"
                  onClick={async (e) => {
                    await dispatch(
                      blogActions.reactionClick(
                        "Blog",
                        singleBlog._id,
                        e.target.name
                      )
                    );
                    dispatch(
                      blogActions.getSingleBlog(blog_id, currentPageReviews)
                    );
                  }}
                >
                  Like{" "}
                  <Badge variant="light">{singleBlog.reactions.like}</Badge>
                </Button>
                <Button
                  name="love"
                  onClick={async (e) => {
                    await dispatch(
                      blogActions.reactionClick(
                        "Blog",
                        singleBlog._id,
                        e.target.name
                      )
                    );
                    dispatch(
                      blogActions.getSingleBlog(blog_id, currentPageReviews)
                    );
                  }}
                >
                  Love{" "}
                  <Badge variant="light">{singleBlog.reactions.love}</Badge>
                </Button>
                <Button
                  name="sad"
                  onClick={async (e) => {
                    await dispatch(
                      blogActions.reactionClick(
                        "Blog",
                        singleBlog._id,
                        e.target.name
                      )
                    );
                    dispatch(
                      blogActions.getSingleBlog(blog_id, currentPageReviews)
                    );
                  }}
                >
                  Sad <Badge variant="light">{singleBlog.reactions.sad}</Badge>
                </Button>
              </div>
              <p>{singleBlog.reviewCount} reviews</p>
            </div>
          </div>
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
      )}
    </div>
  );
};

export default BlogDetail;
