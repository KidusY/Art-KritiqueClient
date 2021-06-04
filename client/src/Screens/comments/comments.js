import React, { useEffect, useState } from 'react';
import './commentsStyle.css';
import Comment from '../../comment/comment';
import { withRouter } from 'react-router-dom'
import GoBackBtn from '../../goBackBtn/goBackBtn';
import api from '../../axios/axios';
import Input from '../../form/input/input'
function Comments(props) {
    const { comments, postTitle, postId } = props.location.state;
    const [commentsInfo, setCommentsInfo] = useState([]);
    const [commentText, setCommentText] = useState('');

    console.log(comments);
    useEffect(() => {
        if (comments) {
            api.get(`/comments/${postId}`)
                .then(res => {
                    setCommentsInfo(res.data);
                })
                .catch(err => console.log(err))
        }

    }, [comments, postId]);
    const getText = (text) => {
        setCommentText(text);
    }
    const postComment = () => {
        let currentComments = [...commentsInfo];
        currentComments.push({
            commentedBy: JSON.parse(sessionStorage.getItem('userInfo')).displayName,
            comment: commentText,
        })
        setCommentsInfo(comments);
    }
    console.log(commentsInfo);
    return (
        <div className="comments">
            <GoBackBtn />
            <h2> {postTitle} </h2>
            {
                comments.length ?
                    <React.Fragment>
                        {commentsInfo.map((commentInfo,i) => <Comment key={i} commentInfo={commentInfo} />)  }

                    </React.Fragment> :
                    <p>No Comments</p>
            }

            <div className="commentsInput">
                <Input width={'100%'} height={'50px'} getText={getText} />
                <button onClick={() => postComment()}><i className="far fa-share-square"></i></button>
            </div>

        </div>
    )
}

export default withRouter(Comments);
