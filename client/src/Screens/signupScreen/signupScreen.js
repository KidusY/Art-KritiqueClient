import React, { useState } from 'react';
import Input from '../../form/input/input';
import axios from '../../axios/axios';
import Button from '../../form/button/button';

import './signUpScreenStyle.css';
import { withRouter } from 'react-router-dom';
function SignupScreen(props) {
    const [email, setEmail] = useState('')
    const [displayName, setdisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const [errorMessageFromServer, setErrorMessageFromServer] = useState(null);


    return (
        <form className="signupForm" onSubmit={(e) => {
            setErrorMessageFromServer(null);
            e.preventDefault();
            axios.post('/users', {
                displayName,
                email,
                password
            }).then((res) => {
                if (res.data) {
                    props.history.push('/');
                }

            }).catch((err) => {
                setErrorMessageFromServer(err.response.data.errorMessage);

            })
        }}>
            {errorMessageFromServer && <label className="text-danger">{errorMessageFromServer}</label>}
            <Input label={"Display name"} getText={setdisplayName} className="input" type="text" /> <br />
            <Input label={"Email"} getText={setEmail} className="input" /> <br />
            <Input type="password" label={"Password"} getText={setPassword} /><br />
            <Input type="password" label={"Confirm password"} getText={setconfirmPassword} /><br />
            <Button type="submit" label={"Signup"} />
        </form>
    )
}

export default withRouter(SignupScreen)
