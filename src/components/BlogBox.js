import React from "react";
import { Media } from "react-bootstrap";

const BlogBox = ({ item }) => {
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
          <div>
            <h5>{item.author.name}</h5>
            <p>{` @${item.author.email}`}</p>
          </div>
          <h6>{item.title}</h6>
          <p>{item.content}</p>
          {item.images ? <img src={item.images[0]} alt="" id="imgBody" /> : ""}
        </Media.Body>
      </Media>
    </div>
  );
};

export default BlogBox;
