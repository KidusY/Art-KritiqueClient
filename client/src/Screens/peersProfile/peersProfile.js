import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import ProfileHeader from '../../profileHeader/profileHeader';
import GoBackBtn from '../../goBackBtn/goBackBtn';
import api from '../../axios/axios'
function PeersProfile(props) {
    const [profilePage, setProfilePage] = useState(null);
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        let likes = 0;
        api.get(`/posts/${props.location.state.userId}`).then(res => {
            res.data.forEach(posts => {
                likes = likes + posts.likes.length;
            })
            setTotalLikes(likes);
            setProfilePage(res.data);
        })

    }, [props.location.state, totalLikes])

    return (
        <div>
            <GoBackBtn />

            {
                profilePage && <ProfileHeader userInfo={props.location.state} profilePage={profilePage} totalLikes={totalLikes} />
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

export default withRouter(PeersProfile)
