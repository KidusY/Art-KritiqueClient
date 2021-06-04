import React, { useState } from 'react';
import EditProfileModal from './editProfileModal/editProfileModal';
import {withRouter} from 'react-router-dom';
import './profileHeader.css'
function ProfileHeader(props) {
   const [modalShow, setModalShow] = useState(false);
    return (
        <div className="profileHeaderContainer">
        
            <div className="profileInfo d-flex">
                <div>
                    <div style={{
                        background: props.userInfo.profileImage ? `url(${props.userInfo.profileImage})` : "url(https://britz.mcmaster.ca/images/nouserimage.gif/image)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        border: "4px solid #a8790e",
                        width: "100px",
                        height: "100px",
                        borderRadius: "100%"

                    }} />

                   {(props.userInfo.userId === JSON.parse(sessionStorage.getItem('userInfo')).userId) && <p className="text-center text-primary" onClick={() => setModalShow(!modalShow)}> Edit </p>}
                </div>
                <div style={{ width: '70%' }}>
                    <p className="m-3"> {props.userInfo.displayName} </p>
                    <ul className="d-flex justify-content-evenly" style={{ width: '100%', listStyle: "none", padding: 0 }}>
                        <li>Likes <br /> {props.totalLikes}</li>
                        <li>Peers <br /> {props.userInfo.peers.length}</li>
                        <li>Curated <br /> {props.profilePage.length}</li>
                    </ul>
                </div>

            </div>

            <div>
                <p className="text-center"> {props.userInfo?.bio || ''} </p>
            </div>

            <EditProfileModal
                userInfo={props.userInfo}
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    )
}

export default withRouter(ProfileHeader);
