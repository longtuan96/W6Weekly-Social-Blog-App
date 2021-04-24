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
    <div className="BlogBox">
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={item.author.avatarUrl}
          alt="avatar"
        />
        <Media.Body>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{item.author.name}</h5>
              <p>{` @${item.author.email}`}</p>
            </div>
            <Button ref={target} onClick={() => setShowOverlay(!showOverlay)}>
              ...
            </Button>
            <Overlay
              target={target.current}
              show={showOverlay}
              placement="right"
            >
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
          </div>
          <h6>{item.title}</h6>
          <p>{item.content}</p>
          <p>{`${item.reviewCount} reviews`}</p>
          {item.images ? <img src={item.images[0]} alt="" id="imgBody" /> : ""}
        </Media.Body>
      </Media>
    </div>
  );
};

export default BlogBox;
