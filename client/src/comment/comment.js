import React,{useState} from 'react'
import './comment.css';
function Comment({ name, img, comment }) {
    const [isLiked, setLiked] = useState(false);
    return (
        <React.Fragment>
            <div className="comment" onDoubleClick={() => setLiked(!isLiked)} >
                <div>
                    <div style={{
                        background: `url(${img})`, backgroundPosition: "center",
                        backgroundSize: "cover",
                        border: "4px solid #a8790e",
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%"
                    }} />
                    {isLiked ? <i class="fas fa-heart" onClick={() => setLiked(false)}></i> : <i class="far fa-heart" onClick={() => setLiked(true)}></i>}
                </div>

                <div style={{ width: "80%" }}>
                    <p> Name </p>
                    <p> Date of the Post </p>
                    <p className="textComment"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                 </p>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Comment;
