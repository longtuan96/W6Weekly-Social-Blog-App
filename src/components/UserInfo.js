import React from "react";

const UserInfo = (user) => {
  return (
    <div className="userBlock row">
      <div className="col">
        <img src="" alt="user avatar" />
      </div>

      <div className="col text-left ">
        <h5>name</h5>
        <p>@email</p>
      </div>
      <div className="col text-right ">
        <a href onClick style={{ textDecoration: "none", cursor: "pointer" }}>
          ...
        </a>
      </div>
    </div>
  );
};

export default UserInfo;
