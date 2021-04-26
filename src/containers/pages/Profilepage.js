import moment from "moment";
import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import BlogBox from "../../components/BlogBox";
import FriendCard from "../../components/FriendCard";

import { blogActions } from "../../redux/actions/blog.action";
import { friendShipActions } from "../../redux/actions/friendship.action";
import { userActions } from "../../redux/actions/user.action";

const Profilepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const blogs = useSelector((state) => state.blog.blogs);

  const filteredBlogs = blogs.filter((item) => item.author.name === user.name);

  console.log("blogs: ", blogs);
  console.log("filtered:", filteredBlogs);

  const friendlist = useSelector((state) => state.friendship.friends);
  const receivedFriendRequestList = useSelector(
    (state) => state.friendship.receivedFriendRequestList
  );
  const sentFriendRequestList = useSelector(
    (state) => state.friendship.sentFriendRequestList
  );
  const users = useSelector((state) => state.friendship.users);

  const loadingUser = useSelector((state) => state.user.loadingUser);
  const loadingFriends = useSelector(
    (state) => state.friendship.loadingFriends
  );
  const loadingReceivedRequest = useSelector(
    (state) => state.friendship.loadingReceivedRequest
  );
  const loadingSentRequest = useSelector(
    (state) => state.friendship.loadingSentRequest
  );
  const array = useSelector((state) => state.friendship);
  const loadingUsers = useSelector((state) => state.friendship.loadingUsers);
  const loadingBlogs = useSelector((state) => state.blog.loadingBlogs);
  console.log("loadingBlogs:", loadingBlogs);
  useEffect(() => {
    dispatch(userActions.getUser());
    dispatch(blogActions.getBlogs());
    dispatch(friendShipActions.getUsers());
    dispatch(friendShipActions.getFriendList());
    dispatch(friendShipActions.getReceiveFriendRequestList());
    dispatch(friendShipActions.getSentFriendRequestList());
  }, [array.array.length]);
  return (
    <div className="main-page">
      {loadingUser ? (
        <BeatLoader color={"white"} />
      ) : (
        <div className="App-mid">
          <div className="page-header">
            <a className="custom-link" onClick={history.goBack}>
              <span class="material-icons">arrow_back</span>
            </a>
            <h5>Profile</h5>
          </div>
          <div className="tweet profile">
            <img
              className="tweet-img profile-img"
              src={user.avatarUrl ? user.avatarUrl : "/profile.jpg"}
              alt="user-avatar"
            />
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
            <p>{`Joined on ${moment(user.createdAt).format("MMMM,YYYY")}`}</p>
            <p>{`${user.friendCount} friends`}</p>
          </div>

          <Tabs>
            <TabList>
              <Tab>Tweets</Tab>
              <Tab>Friends</Tab>
              <Tab>Sent Requests</Tab>
              <Tab>Received Requests</Tab>
              <Tab>Users</Tab>
            </TabList>

            <TabPanel>
              <div id="posted BlogTAB">
                {loadingBlogs ? (
                  <h1>
                    <BeatLoader color={"white"} />
                  </h1>
                ) : (
                  <div>
                    {filteredBlogs.length === 0 ? (
                      <h1>{"I HAVEnt post any blog "}</h1>
                    ) : (
                      filteredBlogs &&
                      filteredBlogs.map((item) => <BlogBox item={item} />)
                    )}
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div id="friendsTAB">
                {loadingFriends ? (
                  <BeatLoader color={"white"} />
                ) : (
                  <div>
                    {user.friendCount === 0 ? (
                      <h1>{"I HAVE NO FRIEND :( "}</h1>
                    ) : (
                      friendlist &&
                      friendlist.map((item) => (
                        <FriendCard friend={item} inPlace="friend" />
                      ))
                    )}
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div id="sentRequestTAB">
                {loadingSentRequest ? (
                  <BeatLoader color={"white"} />
                ) : (
                  <div>
                    {sentFriendRequestList.length === 0 ? (
                      <h5>{"No requests sent"}</h5>
                    ) : (
                      sentFriendRequestList &&
                      sentFriendRequestList.map((item) => (
                        <FriendCard friend={item} inPlace="sent" />
                      ))
                    )}
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div id="receivedRequestTAB">
                {loadingReceivedRequest ? (
                  <BeatLoader color={"white"} />
                ) : (
                  <div>
                    {receivedFriendRequestList.length === 0 ? (
                      <h5>{"No requests received"}</h5>
                    ) : (
                      receivedFriendRequestList &&
                      receivedFriendRequestList.map((item) => (
                        <FriendCard friend={item} inPlace="received" />
                      ))
                    )}
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div id="usersTAB">
                {loadingUsers ? (
                  <BeatLoader color={"white"} />
                ) : (
                  <div>
                    {users.length === 0 ? (
                      <h5>{"No requests received"}</h5>
                    ) : (
                      users && users.map((item) => <FriendCard friend={item} />)
                    )}
                  </div>
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}

      {/* <TestImgUpload /> */}
    </div>
  );
};

export default Profilepage;
