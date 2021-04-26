import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BlogBox from "../../components/BlogBox";
import FriendCard from "../../components/FriendCard";
import TestImgUpload from "../../components/TestImgUpload";
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

  const loadingBlogs = useSelector((state) => state.blog.loadingBlogs);
  console.log("loadingBlogs:", loadingBlogs);
  useEffect(() => {
    dispatch(userActions.getUser());
    dispatch(blogActions.getBlogs());
    dispatch(friendShipActions.getFriendList());
    dispatch(friendShipActions.getReceiveFriendRequestList());
    dispatch(friendShipActions.getSentFriendRequestList());
  }, []);
  return (
    <div className="main-page">
      {loadingUser ? (
        <h1>LOADING</h1>
      ) : (
        <div className="App-mid">
          <div className="page-header">
            <a className="custom-link" onClick={history.goBack}><span class="material-icons">
              arrow_back
</span></a>
            <h5>Profile</h5>
          </div>
          <div className="tweet profile">
            <img className="tweet-img profile-img" src={user.avatarUrl ? user.avatarUrl : "profile.jpg"} alt="user-avatar" />
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
            </TabList>

            <TabPanel>
              <div id="posted BlogTAB">
                {loadingBlogs ? (
                  <h1>LOADING blogs</h1>
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
                  <h1>LOADING FRIEND</h1>
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
                  <h1>LOADING sent request</h1>
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
                  <h1>LOADING REceive request</h1>
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
          </Tabs>






        </div>
      )}

      {/* <TestImgUpload /> */}
    </div>
  );
};

export default Profilepage;
