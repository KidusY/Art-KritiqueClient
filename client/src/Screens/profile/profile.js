import React, { useState, useEffect } from 'react'
import './profileStyle.css';
import ProfileHeader from '../../profileHeader/profileHeader';
import api from '../../axios/axios';
import { withRouter } from 'react-router-dom'


function Profile(props) {
    const [profilePage, setProfilePage] = useState(null);
    const currentUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const [totalLikes,setTotalLikes] = useState(0)

    useEffect(() => {
      
        api.get(`/posts/${currentUserInfo.userId}`).then(res => {
            console.log(res);
            res.data.forEach(posts=>{
                console.log(posts.likes);
                setTotalLikes(totalLikes + posts.likes.length);
            })
            setProfilePage(res.data);
        })

    }, [currentUserInfo.userId])


console.log(totalLikes);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="logo">Profile </h1>
                <i className="fas fa-sign-out-alt m-2 fs-3 text-danger" onClick={() => {
                    //  sessionStorage.removeItem('userInfo');
                    sessionStorage.clear();
                    props.setUserInfo(null);
                }}></i>
            </div>
            {
                profilePage && <ProfileHeader userInfo={props.userInfo} profilePage={profilePage} totalLikes={totalLikes} />
            }
            
            <div className="container d-flex flex-wrap justify-content-around">
                {profilePage &&
                    <React.Fragment>
                        {profilePage.map((post, i) =>
                            <div style={{
                                background: `url(${post.imgLink})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                width: "100px",
                                height: "100px",
                                marginTop: "10px",
                            }} key={i} />
                        )}
                    </React.Fragment>


                }
            </div>
        </div>
    )
}

export default withRouter(Profile);
