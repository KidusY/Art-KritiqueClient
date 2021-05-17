import React, { useState } from 'react';
import Input from '../../form/input/input';
import Button from '../../form/button/button'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './loginScreenStyle.css'
function LoginScreen(props) {
    const [emailInput, setEmailInputText] = useState('')
    const [passwordInput, setPasswordInputText] = useState('');

    const [error, setError] = useState(null);

    console.log(passwordInput);


    return (
        <form className="loginForm" onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            axios.post('http://localhost:8000/login', {
                email: emailInput,
                password: passwordInput
            }).then(res => {

                sessionStorage.setItem('userInfo', JSON.stringify(res.data));

                if (res.data) {
                    props.history.push('/timeline');
                }
              
            }).
            catch(err=>{
               setError( err?.response?.data?.errorMessage);
            })

        }}>
            {error && <label className="text-danger">{error}</label>}
            <Input label={"Email"} getText={setEmailInputText} /><br />
            <Input label={"Password"} type="password" getText={setPasswordInputText} /> <br />

            <Button label={"Login"} /> <br />
            <Button type="button" label={"Signup"} onClickFunction={() => { props.history.push('/signup') }} />

        </form>
    )
}

export default withRouter(LoginScreen)
