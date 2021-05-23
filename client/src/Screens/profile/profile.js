import React, { useState, useEffect } from 'react'
import './profileStyle.css';
import ProfileHeader from '../../profileHeader/profileHeader';
import api from '../../axios/axios';
import { withRouter } from 'react-router-dom'


function Profile(props) {
    const [profilePage, setProfilePage] = useState();
    const currentUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));


    useEffect(() => {
        api.get(`/posts/${currentUserInfo.userId}`).then(res => {
            setProfilePage(res.data);
        })

    }, [currentUserInfo.userId])


    console.log(profilePage);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="logo">Profile </h1>
                <i className="fas fa-sign-out-alt m-2 fs-3 text-danger" onClick={() => {
                    //  sessionStorage.removeItem('userInfo');
                    sessionStorage.clear();

                    props.history.push('/')
                }}></i>
<<<<<<< HEAD
            </div>


            <ProfileHeader userInfo={props.userInfo} profilePage={profilePage} />
=======
        </div>
         
            
            <ProfileHeader userInfo ={props.userInfo}/>
>>>>>>> cd599aea97e0f512ab017d4015c34aefb46e0a7b
            <div className="container d-flex flex-wrap justify-content-around">
                {profilePage.map((post, i) =>
                    <div style={{
                        background: `url(${post.imgLink})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100px",
                        height: "100px",
                        marginTop: "10px",


                    }} key={i} />


                )

                }

            </div>


        </div>
    )
}

export default withRouter(Profile);
