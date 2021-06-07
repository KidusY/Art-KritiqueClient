import React, { useState, useEffect } from 'react';
import EditProfileModal from './editProfileModal/editProfileModal';
import { withRouter } from 'react-router-dom';
import api from '../axios/axios'
import './profileHeader.css'
function ProfileHeader(props) {
    const [modalShow, setModalShow] = useState(false);
    const [addPeerBtn, setAddPeerBtn] = useState(false);

    const addPeer = () => {
        setAddPeerBtn(!addPeerBtn);
        api.put(`/users/addpeer/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`, {
            peerId: props.userInfo.userId
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    useEffect(() => {
        api.get(`/users/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`)
            .then(res => {
                const currentUserInfo = res.data[0];
                if (currentUserInfo.peers.includes(props.userInfo.userId)) {
                    setAddPeerBtn(true)
                }

            })
    }, [props.userInfo.userId])

    return (
        <div className="profileHeaderContainer">
            {
                (props.userInfo.userId !== JSON.parse(sessionStorage.getItem('userInfo')).userId) &&
                <button onClick={() => addPeer()} style={{ background: addPeerBtn ? '#a8790e' : 'none', color: addPeerBtn ? 'white' : 'black' }} className="addPeerBtn float-end w-25">
                    {addPeerBtn ? <span> Peer <i className="fas fa-user-check"></i> </span> : <span>Add<i className="fas fa-user"></i> </span>}
                </button>
            }
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
                    <ul className="d-flex justify-content-evenly" style={{ width: '130%', maxWidth: '200px', listStyle: "none", padding: 0 }}>
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
