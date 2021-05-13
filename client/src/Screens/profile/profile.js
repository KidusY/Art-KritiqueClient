import React from 'react'
import './profileStyle.css';
import ProfileHeader from '../../profileHeader/profileHeader';
import {withRouter} from 'react-router-dom'


function profile(props) {
    return (
        <div>
        <div className="d-flex justify-content-between">
                <h1 className="logo">Profile </h1>
                <i className="fas fa-sign-out-alt m-2 fs-3 text-danger" onClick={()=>props.history.push('/login')}></i>
        </div>
         
            
            <ProfileHeader />
            <div className="container d-flex flex-wrap justify-content-around">
                <div style={{
                    background: "url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px",
                    marginTop: "10px",
                    

                }} />
                <div style={{
                    background: "url(https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px",
                     marginTop: "10px"

                }} />
                <div style={{
                    background: "url(https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px",
                    marginTop: "10px"

                }} />
                <div style={{
                    background: "url(https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px",
                    marginTop: "10px"

                }} />

            </div>


        </div>
    )
}

export default withRouter(profile);
