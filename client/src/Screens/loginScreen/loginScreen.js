import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import Input from '../../form/input/input';
import Button from '../../form/button/button'
import { withRouter } from 'react-router-dom';
import axios from '../../axios/axios';
import './loginScreenStyle.css';
function LoginScreen(props) {
    const [emailInput, setEmailInputText] = useState('')
    const [passwordInput, setPasswordInputText] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    return (
        <form className="loginForm" onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            axios.post('/login', {
                email: emailInput,
                password: passwordInput
            }).then(res => {
                sessionStorage.setItem('userInfo', JSON.stringify(res.data));
                if (res.data) {
                  //  props.setUserInfo(res.data);
                    dispatch({
                        type: "LoginUser",
                        payload:res.data
                    })
                    props.history.push('/timeline');
                }

            })
                .catch(err => {
                    setError(err?.response?.data?.errorMessage);
                })

        }}>
            {error && <label className="text-danger">{error}</label>}
            <Input label={"Email"} type={"email"} getText={setEmailInputText} /><br />
            <Input label={"Password"} type="password" getText={setPasswordInputText} /> <br />

            <Button label={"Login"} /> <br />
            <Button type="button" label={"Signup"} onClickFunction={() => { props.history.push('/signup') }} />
            
        </form>
    )
}

export default withRouter(LoginScreen)
