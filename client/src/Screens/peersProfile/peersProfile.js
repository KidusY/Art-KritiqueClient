import React,{useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import ProfileHeader from '../../profileHeader/profileHeader';
import api from '../../axios/axios'
function PeersProfile(props) {
   const [profilePage, setProfilePage] = useState(null);
   const [totalLikes, setTotalLikes] = useState(0);  
   console.log(props);

    useEffect(() => {
        let likes = 0;
        api.get(`/posts/${props.location.state.userId}`).then(res => {              
            res.data.forEach(posts => {
                likes = likes + posts.likes.length;
            })
            setTotalLikes(likes);
            setProfilePage(res.data);
        })

    }, [props.location.state,totalLikes])
    return (
        <div>
            <button className="btn" style={{ width: "80px", margin:'2px', padding:'2px', color:"#a8790e"}}
            onClick={()=>props.history.goBack()}
            > 
            <i className="fas fa-long-arrow-alt-left"></i> Back
            </button>
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
