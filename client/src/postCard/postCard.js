import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import dummyProfilePic from '../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import './postCardsStyle.css'
function PostCard(props) {
    const [isLiked,setLiked] = useState(false);
    return (
        <React.Fragment >

            <div className="postCardContainer">

                <div className="nameContainer">

                    <div className="profilePic" style={{ background: "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)", backgroundPosition: "center", backgroundSize: 'cover' }} />
                    <div className="nameHeading">
                        <h3> Name </h3>
                        <p> Location </p>
                    </div>
                </div>


                <div className="artPost" style={{ background: "url(https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)" }} />

                <div className="iconsContainer">

                    {isLiked ? <i class="fas fa-heart" onClick={() => setLiked(false)}></i> : <i class="far fa-heart" onClick={()=>setLiked(true)}></i>}
                    <i class="fas fa-comment-dots" onClick={()=>props.history.push('/comments')}></i>
                    <i class="fas fa-comment-dots"></i>
                </div>


            </div>



        </React.Fragment>
    )
}

export default withRouter(PostCard)
