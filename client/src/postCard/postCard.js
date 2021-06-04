import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../axios/axios'
import dummyProfilePic from '../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import './postCardsStyle.css'
function PostCard(props) {
    const [isLiked, setLiked] = useState(false);
    const [PosterInfo, setPosterInfo] = useState(null);

    useEffect(() => {
        axios.get(`/users/${props.postedBy}`)
            .then(res => {
                setPosterInfo(res.data);
                props.likes.forEach(likedBy => {
                    let user = sessionStorage.getItem('userInfo')
                    if (likedBy === JSON.parse(user).userId)
                        setLiked(true);
                })
            })
            .catch(err => console.log(err));
    }, [props])

    const handleLikedPost = () => {
        let user = sessionStorage.getItem('userInfo')
        setLiked(!isLiked);
        axios.put('/posts/likes', {
            userId: JSON.parse(user).userId,
            postId: props.postId
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <React.Fragment >
            { PosterInfo &&
                <div className="postCardContainer">

                    <div className="nameContainer">
                        <div className="profilePic" style={{ background: PosterInfo[0]?.profileImage ? `url(${PosterInfo[0]?.profileImage})` : 'url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)', backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} /> 
                        <div className="nameHeading">
                        <h3 onClick={() => props.history.push('/peerprofile', PosterInfo[0])}> {PosterInfo[0]?.displayName || "Display Name"} </h3>
                            <p> Location </p>
                        </div>
                    </div>


                    <div className="artPost" style={{ background: `url(${props.imgLink})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                    <div>
                        <p className='mx-2 fst-italic'>{props.title}</p>
                    </div>

                    <div className="iconsContainer">

                        {isLiked ? <i className="fas fa-heart" onClick={() => handleLikedPost()}></i> : <i className="far fa-heart" onClick={() => handleLikedPost()}></i>}
                        <i className="fas fa-comment-dots" onClick={() => props.history.push('/comments',{comments:props.comments,postTitle:props.title,postId:props.postId})}></i>

                    </div>


                </div>

            }



        </React.Fragment>
    )
}

export default withRouter(PostCard)
