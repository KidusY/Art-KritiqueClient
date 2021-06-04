import React, { useState, useEffect } from 'react'
import './App.css';
import LoginForm from './Screens/loginScreen/loginScreen'
import SignupForm from './Screens/signupScreen/signupScreen';
import TimeLineDashBoard from './Screens/timeLineDashboard/timeLineDashboard';
import Comments from './Screens/comments/comments';
import BottomNav from './bottomNavBar/bottomNavBar'
import SearchPeer from './searchPeer/searchPeer';
import FileUpload from './fileUpload/fileUpload';
import Profile from './Screens/profile/profile';
import PeersProfile from './Screens/peersProfile/peersProfile';
import { Redirect, Route } from 'react-router-dom'
function App() {
  const [showSearchPeerModal, setShowSearchPeerModal] = useState(false);
  const [showUploadFileModal, setShowUploadFileModal] = useState(false);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {

    const currentUserInfo = sessionStorage.getItem('userInfo');
    const user = JSON.parse(currentUserInfo);

    if (currentUserInfo) {
      setUserInfo(user);
    }

    return () => {

    }
  }, []);

  const setCurrentUserInfo = (userInfo) => {
    sessionStorage.setItem('userInfo', userInfo);
    setUserInfo(userInfo);
  }

  const showHideSearchModal = () => {
    if (showUploadFileModal) {
      setShowUploadFileModal(false);
    }
    setShowSearchPeerModal(!showSearchPeerModal);

  }

  const showHideUploadFileModal = () => {
    if (showSearchPeerModal) {
      setShowSearchPeerModal(false);
    }

    setShowUploadFileModal(!showUploadFileModal);
  }

  return (
    <div className="App">

      {showSearchPeerModal && <SearchPeer />}
      {showUploadFileModal && <FileUpload setShowUploadFileModal={setShowUploadFileModal} />}

      <div className="routes">
        {
          userInfo ?
            <React.Fragment>
              <Route exact path={"/timeline"} component={(props) => <TimeLineDashBoard userInfo={userInfo} />} />
              <Route exact path={"/profile"} component={(props) => <Profile userInfo={userInfo} setUserInfo={setCurrentUserInfo} />} />
              <Route exact path={"/comments"} component={(props) => <Comments userInfo={userInfo} />} />
              <Route exact path={"/peerprofile"} component={(props) => <PeersProfile userInfo={userInfo} />} />
            </React.Fragment>
            :
            <Redirect to="/" />
        }


        <Route exact path={"/signup"} component={(props) => <SignupForm />} />
        <Route exact path={"/"}>
          {
            userInfo ? <Redirect to="/timeline" /> :
              <LoginForm setUserInfo={setUserInfo} />
          }
        </Route>

      </div>



      { userInfo && <BottomNav setShowSearchPeerModal={showHideSearchModal} showSearchPeerModal={showHideSearchModal} showHideUploadFileModal={showHideUploadFileModal} />}

    </div>
  );
}

export default App;
