import React, { useRef, useState } from "react";
import { Media, Button, Overlay, Tooltip, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { blogActions } from "../redux/actions/blog.action";
import EditBox from "./EditBox";

const BlogBox = ({ item }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const target = useRef(null);
  const handleDeleteBlog = (id) => {
    dispatch(blogActions.deleteBlog(id));
  };
  return (
    <div className="tweet">
      <div className="tweet-left">
        <img
          className="tweet-img"
          src={item.author.avatarUrl ? item.author.avatarUrl : "/profile.jpg"}
          alt="user-avatar"
        />
      </div>

      <div className="tweet-right tweet-content">
        <div className="tweet-header">
          <div className="tweet-header-left">
            <h5 className="tweet-user-name">{item.author.name}</h5>
            <p className="tweet-user-email">{item.author.email}</p>
          </div>
          <a
            className="custom-link"
            ref={target}
            onClick={() => setShowOverlay(!showOverlay)}
          >
            <span class="material-icons">more_horiz</span>
          </a>
        </div>

        <Overlay target={target.current} show={showOverlay} placement="left">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              <Button variant="primary" onClick={handleShowModal}>
                Edit
              </Button>
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                  <EditBox id={item._id} />
                </Modal.Body>
              </Modal>
              <Button
                variant="primary"
                onClick={() => handleDeleteBlog(item._id)}
              >
                Delete
              </Button>
            </Tooltip>
          )}
        </Overlay>

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
      </div>
    </div>
  );
};

export default BlogBox;
