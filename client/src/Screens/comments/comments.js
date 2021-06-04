import React, { useEffect, useState } from 'react';
import './commentsStyle.css';
import Comment from '../../comment/comment';
import { withRouter } from 'react-router-dom'
import GoBackBtn from '../../goBackBtn/goBackBtn';
import api from '../../axios/axios';
import Input from '../../form/input/input'
function Comments(props) {
    const { comments, postTitle, postId, postedBy, profileImage } = props.location.state;
    const [commentsInfo, setCommentsInfo] = useState([]);
    const [commentText, setCommentText] = useState('');
    useEffect(() => {

        api.get(`/comments/${postId}`)
            .then(res => {
                setCommentsInfo(res.data);
            })
            .catch(err => console.log(err))


    }, [postId]);
    const getText = (text) => {
        setCommentText(text);
    }
    const postComment = () => {
        let currentComments = [...commentsInfo];
        currentComments.push({
            commentsBy: JSON.parse(sessionStorage.getItem('userInfo')).userId,
            comment: commentText,
            postId,
            datePosted: new Date().toDateString()
        })

        setCommentsInfo(currentComments);

        api.post('/comments', {
            commentsBy: JSON.parse(sessionStorage.getItem('userInfo')).userId,
            comment: commentText,
            postId,
        }).then(res => console.log(res.data))
    }
    console.log(commentsInfo);
    return (
        <div className="comments">
            <div className="header">
                <GoBackBtn />
                <div className="d-flex w-100 justify-content-evenly">
                    <div className="profilePic w-30" style={{ background: profileImage ? `url(${profileImage})` : 'url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)', backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                    <p className="align-self-center">{postedBy}:</p>
                    <p className="align-self-center  w-50">  {postTitle} </p>
                </div>

            </div>
            <div style={{ minHeight: "50vh", overflow: 'scroll', marginTop: "100px" }}>
                {
                    comments.length > 0 || commentsInfo.length > 0 ?
                        <div>
                            {
                                commentsInfo.map((commentInfo, i) => {
                                    console.log(i);
                                    return <Comment key={i} commentInfo={commentInfo} />
                                })
                            }
                        </div> :
                        <p>No Comments</p>
                }

            </div>

            <div className="commentsInput">
                <Input width={'100%'} height={'50px'} getText={getText} />
                <button onClick={() => postComment()}><i className="far fa-share-square"></i></button>
            </div>

        </div>
    )
}

export default withRouter(Comments);
