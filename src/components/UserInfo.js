import React, { useState } from "react";
import { useEffect } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../redux/actions/user.action";
import api from "../redux/api";

const UserInfo = () => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);

  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    delete api.defaults.headers.common["authorization"];
    history.push("/");
  };

  const handleToggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    // dispatch(userActions.getUser());
  }, []);
  return (
    <div className="nav-link user">
      <div className="">
        <img
          className="user-img"
          src={user.avatarUrl ? user.avatarUrl : "profile.jpg"}
          alt="user-avatar"
        />
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
