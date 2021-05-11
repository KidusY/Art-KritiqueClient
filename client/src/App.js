import './App.css';
import LoginForm from './Screens/loginScreen/loginScreen'
import SignupForm from './Screens/signupScreen/signupScreen';
import TimeLineDashBoard from './Screens/timeLineDashboard/timeLineDashboard'
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">

      
      <Route exact path={"/timeline"} component={(props) => <TimeLineDashBoard />}/>
      <Route exact path={"/login"} component={(props) => <LoginForm />}/>
      <Route exact path={"/signup"} component={(props) => <SignupForm />}/>
      <Route exact path={"/"} component={(props) => <LoginForm />}/>
   
    </div>
  );
}

export default App;
