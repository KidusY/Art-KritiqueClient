import React,{useState} from 'react'
import './App.css';
import LoginForm from './Screens/loginScreen/loginScreen'
import SignupForm from './Screens/signupScreen/signupScreen';
import TimeLineDashBoard from './Screens/timeLineDashboard/timeLineDashboard';
import Comments from './Screens/comments/comments';
import BottomNav from './bottomNavBar/bottomNavBar'
import SearchPeer from './searchPeer/searchPeer';
import {Route} from 'react-router-dom'
function App() {
  const [showSearchPeerModal, setShowSearchPeerModal] = useState(false);
  return (
    <div className="App">

      {showSearchPeerModal && <SearchPeer />}
      
      <Route exact path={"/timeline"} component={(props) => <TimeLineDashBoard />}/>
      <Route exact path={"/comments"} component={(props) => <Comments />}/>
      <Route exact path={"/login"} component={(props) => <LoginForm />}/>
      <Route exact path={"/signup"} component={(props) => <SignupForm />}/>
      <Route exact path={"/"} component={(props) => <LoginForm />}/>

      <BottomNav setShowSearchPeerModal={setShowSearchPeerModal} showSearchPeerModal={showSearchPeerModal}/>

    </div>
  );
}

export default App;
