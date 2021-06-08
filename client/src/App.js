import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
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
import {Redirect, Route } from 'react-router-dom';

function App() {
  const state = useSelector(state=>state);
  const dispatch = useDispatch();
  const [showSearchPeerModal, setShowSearchPeerModal] = useState(false);
  const [showUploadFileModal, setShowUploadFileModal] = useState(false);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {

    const currentUserInfo = sessionStorage.getItem('userInfo');
    const user = JSON.parse(currentUserInfo);

    if (currentUserInfo) {
      //setUserInfo(user);
      dispatch({
        type:'LoginUser',
        payload:user
      })
    }

    return () => {

    }
  }, [dispatch]);

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
  
  console.log("sdfasdf",state);
  return (
    <div className="App">

      {showSearchPeerModal && <SearchPeer />}
      {showUploadFileModal && <FileUpload setShowUploadFileModal={setShowUploadFileModal} />}

      <div className="routes">
        {
          state.LoginReducer.authToken ?
            <React.Fragment>
              <Route exact path={"/timeline"} component={(props) => <TimeLineDashBoard userInfo={state.LoginReducer} />} />
              <Route exact path={"/profile"} component={(props) => <Profile userInfo={state.LoginReducer} setUserInfo={setCurrentUserInfo} />} />
              <Route exact path={"/comments"} component={(props) => <Comments userInfo={state.LoginReducer} />} />
              <Route exact path={"/peerprofile"} component={(props) => <PeersProfile userInfo={state.LoginReducer} />} />
            </React.Fragment>
            :
            <Redirect to="/" />
        }


        <Route exact path={"/signup"} component={(props) => <SignupForm />} />
        <Route exact path={"/"}>
          {
            state.LoginReducer.authToken  ? <Redirect to="/timeline" /> :
              <LoginForm setUserInfo={setUserInfo} />
          }
        </Route>

      </div>



      { state.LoginReducer.authToken && <BottomNav setShowSearchPeerModal={showHideSearchModal} showSearchPeerModal={showHideSearchModal} showHideUploadFileModal={showHideUploadFileModal} />}

    </div>
  );
}


export default App;
