import React,{useState} from 'react'
import './App.css';
import LoginForm from './Screens/loginScreen/loginScreen'
import SignupForm from './Screens/signupScreen/signupScreen';
import TimeLineDashBoard from './Screens/timeLineDashboard/timeLineDashboard';
import Comments from './Screens/comments/comments';
import BottomNav from './bottomNavBar/bottomNavBar'
import SearchPeer from './searchPeer/searchPeer';
import FileUpload from './fileUpload/fileUpload';
import Profile from './Screens/profile/profile'
import {Route} from 'react-router-dom'
function App() {
  const [showSearchPeerModal, setShowSearchPeerModal] = useState(false);
  const [showUploadFileModal, setShowUploadFileModal] = useState(false);

  const showHideSearchModal = ()=>{
    if (showUploadFileModal){
      setShowUploadFileModal(false);
    }
    setShowSearchPeerModal(!showSearchPeerModal);
    
  } 

  const showHideUploadFileModal = ()=>{
    if (showSearchPeerModal) {
      setShowSearchPeerModal(false);
    }
    
    setShowUploadFileModal(!showUploadFileModal);
  }
  return (
    <div className="App">

      {showSearchPeerModal && <SearchPeer />}
      {showUploadFileModal && <FileUpload />  }


      
      <Route exact path={"/timeline"} component={(props) => <TimeLineDashBoard />}/>
      <Route exact path={"/profile"} component={(props) => <Profile />}/>
      <Route exact path={"/comments"} component={(props) => <Comments />}/>
      <Route exact path={"/login"} component={(props) => <LoginForm />}/>
      <Route exact path={"/signup"} component={(props) => <SignupForm />}/>
      <Route exact path={"/"} component={(props) => <LoginForm />}/>

      <BottomNav setShowSearchPeerModal={showHideSearchModal} showSearchPeerModal={showHideSearchModal} showHideUploadFileModal={showHideUploadFileModal}/>

    </div>
  );
}

export default App;
