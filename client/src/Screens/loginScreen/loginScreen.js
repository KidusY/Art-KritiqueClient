import React from 'react';
import Input from '../../form/input/input';
import Button from '../../form/button/button'
import {withRouter} from 'react-router-dom'
import './loginScreenStyle.css'
function LoginScreen(props) {
    return (
        <form className="loginForm">

        <Input label={"Email"}/><br />
        <Input label={"Password"}/> <br/>

            <Button label={"Login"} onClickFunction={()=>{}}/> <br/>
            <Button label={"Signup"} onClickFunction={()=>{props.history.push('/signup')}}/>
            
        </form>
    )
}

export default withRouter(LoginScreen)
