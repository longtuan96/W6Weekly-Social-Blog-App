import React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const UserInfo = () => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="userBlock row">
      <div className="col">
        <img src={user.avatarUrl} alt="user avatar" />
      </div>

      <div className="col text-left ">
        <h5>{user.name}</h5>
        <p>{user.email}</p>
      </div>
      <div className="col text-right ">
        <Button variant="primary" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
