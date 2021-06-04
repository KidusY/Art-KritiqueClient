import React, { useState,useEffect } from 'react';
import api from '../axios/axios';
import './comment.css';
function Comment({commentInfo}) {
    const [isLiked, setLiked] = useState(false);
    const [commenterInfo,setCommenterInfo]= useState(null);
    console.log(commentInfo);
    useEffect(()=>{
        api.get(`/users/${commentInfo.commentsBy}`).then(res => setCommenterInfo(res.data[0])).catch(err=>console.log(err))
    },[commentInfo]);

    console.log(commenterInfo);
    return (
        <React.Fragment>
            {commenterInfo &&
            <div className="commentContainer">
                <div className="comment" onDoubleClick={() => setLiked(!isLiked)}>
                    <div>
                        <div style={{
                            background: `url(${commenterInfo.profileImage})`, backgroundPosition: "center",
                            backgroundSize: "cover",
                            border: "4px solid #a8790e",
                            width: "50px",
                            height: "50px",
                            borderRadius: "100%"
                        }} />
                    </div>

                    <div >
                        <p> {commenterInfo.displayName} </p>
                        <p> {commentInfo.datePostedId} </p>
                        <p className="textComment">
                            {commentInfo.comment} 
                        </p>
                    </div>

                   

                </div>
                <div className="likedBtn">
                    {isLiked ? <i className="fas fa-heart" onClick={() => setLiked(false)}></i> : <i class="far fa-heart" onClick={() => setLiked(true)}></i>}
                </div>
            </div>
               }

        </React.Fragment>
    )
}

export default Comment;
