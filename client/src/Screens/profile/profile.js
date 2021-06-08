import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './profileStyle.css';
import ProfileHeader from '../../profileHeader/profileHeader';
import api from '../../axios/axios';
import { withRouter } from 'react-router-dom'


function Profile(props) {
    const [profilePage, setProfilePage] = useState(null);
    const dispatch = useDispatch();
    const currentUserInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        let likes = 0;
        api.get(`/posts/${currentUserInfo.userId}`).then(res => {            
            res.data.forEach(posts => {
                likes = totalLikes + posts.likes.length;
            })
            setTotalLikes(likes);
            setProfilePage(res.data);
        })

    }, [currentUserInfo.userId, totalLikes])
    
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="logo">Profile </h1>
                <i className="fas fa-sign-out-alt m-2 fs-3 text-danger" onClick={() => {
                    //  sessionStorage.removeItem('userInfo');
                    sessionStorage.clear();
                    dispatch({
                        type: 'LogOutUser',
                        payload: { authToken:null}
                    })
                    props.history.push('/')
                }}></i>
            </div>
            {
                profilePage && <ProfileHeader userInfo={props.userInfo} profilePage={profilePage} totalLikes={totalLikes} />
            }

            <div className="container d-flex flex-wrap">
                {profilePage &&
                    <React.Fragment>
                        {profilePage.map((post, i) =>
                            <div style={{
                                background: `url(${post.imgLink})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                width: "100px",
                                height: "100px",
                                margin: "10px 1px",
                            }} key={i} />
                        )}
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

export default withRouter(Profile);
