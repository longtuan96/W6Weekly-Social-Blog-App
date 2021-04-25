import React, { useState } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const UserInfo = () => {
  const [isActive, setActive] = useState(false);

  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <div className="nav-link user">
      <div className="">
        <img src={user.avatarUrl ? user.avatarUrl
          : "profile.jpg"
        } alt="user-avatar" />
      </div>

      <div className="user-name-email">
        <h6>{user.name}</h6>
        <p>{user.email}</p>
      </div>

      <a onClick={handleLogOut} className="log-out">
        Log Out
        </a>

    </div>
  );
};

export default UserInfo;
