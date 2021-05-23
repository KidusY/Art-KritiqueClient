import React, { useState } from 'react';
import Input from '../../form/input/input';

import Button from '../../form/button/button';

import axios from 'axios';
import './signUpScreenStyle.css';
function SignupScreen() {
    const [email, setEmail] = useState('')
    const [displayName, setdisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('');

    const [errorMessageFromServer, setErrorMessageFromServer] = useState(null);


    return (
        <form className="signupForm" onSubmit={(e) => {
            setErrorMessageFromServer(null);
            e.preventDefault();
            axios.post('http://localhost:8000/users', {
                displayName,
                email,
                password
            }).then((res) => {
                console.log(res.data);

            }).catch((err) => {
                setErrorMessageFromServer(err.response.data.errorMessage);

            })
        }}>
            {errorMessageFromServer && <label className="text-danger">{errorMessageFromServer}</label>}
            <Input label={"Display name"} getText={setdisplayName} className="input" /> <br />
            <Input label={"Email"} getText={setEmail} className="input" /> <br />
            <Input type="password" label={"Password"} getText={setPassword} /><br />
            <Input type="password" label={"Confirm password"} getText={setconfirmPassword} /><br />
            <Button type="submit" label={"Signup"} />
        </form>
    )
}

export default SignupScreen
