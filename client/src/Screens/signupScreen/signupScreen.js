import React from 'react';
import Input from '../../form/input/input'
import Button from '../../form/button/button'
import './signUpScreenStyle.css';
function signupScreen() {
    return (
        <form className="signupForm">
            <Input label={"email"} className="input"/> <br/>
            <Input label={"password"} /><br />
            <Input label={"confirm password"} /><br />
            <Button label={"Signup"}/>
        </form>
    )

}

export default signupScreen
