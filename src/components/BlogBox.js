import React, { useRef, useState } from "react";
import {
  Media,
  Button,
  Overlay,
  Tooltip,
  Modal,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { blogActions } from "../redux/actions/blog.action";
import EditBox from "./EditBox";

const BlogBox = ({ item }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const target = useRef(null);
  const handleDeleteBlog = (id) => {
    dispatch(blogActions.deleteBlog(id));
  };
  const handleBlogClick = (id) => {
    history.push(`/blogs/${id}`);
  };
  return (
    <div className="tweet row">
      <div className="tweet-left col-2">
        <img
          className="tweet-img"
          src={item.author.avatarUrl ? item.author.avatarUrl : "/profile.jpg"}
          alt="user-avatar"
        />
      </div>

      <div className="tweet-right col-10 tweet-content">
        <div className="tweet-header">
          <div className="tweet-header-left">
            <h5 className="tweet-user-name">{item.author.name}</h5>
            <p className="tweet-user-email">{item.author.email}</p>
          </div>
          {/* <a
            className="custom-link"
            ref={target}
            onMouseOver={() => setShowOverlay(!showOverlay)}
            href
          >
            <span class="material-icons">more_horiz</span>
          </a> */}
          <div className="d-flex">
            <button className="btn-dark" onClick={handleShowModal}>
              Edit
            </button>
            <button
              className="btn-dark"
              onClick={() => handleDeleteBlog(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Body>
            <EditBox id={item._id} />
          </Modal.Body>
        </Modal>

        <h5>{item.title}</h5>
        <p className="tweet-text">{item.content}</p>

        {item.images ? (
          <div className="img-box">
            <img src={item.images[0]} alt="" id="imgBody" />
          </div>
        ) : (
          ""
        )}

        <div className="tweet-reactions">
          <p>{`${item.reviewCount} reviews`}</p>
        </div>
        <div className="text-center">
          <button
            className="btn-dark"
            onClick={() => handleBlogClick(item._id)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
