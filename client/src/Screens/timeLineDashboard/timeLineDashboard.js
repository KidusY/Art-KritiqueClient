import React, { useEffect, useState } from 'react'
import './timeLinestyle.css';
import PostCard from '../../postCard/postCard'
import PeerCollection from '../../peersCollection/peersCollection'
import axios from '../../axios/axios'


function TimeLineDashboard({ userInfo }) {
    const [currentUserInfo, setCurrentUserInfo] = useState(null);
    const [allUsers, setAllUsers] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const info = sessionStorage.getItem('userInfo');
        setCurrentUserInfo(JSON.parse(info));
        axios('/posts').then(res => setPosts(res.data)).catch(err => console.log(err));

    }, [])


    const user = userInfo || currentUserInfo;


    return (
        <div className="timeline">
            <div style={{ position: 'fixed', minWidth: '100%',top:0,background:"white",paddingBottom:'30px' }}>
                <h1 className="logo">Art-Kritique </h1>

                {
                    user && <div className="row justify-content-center" >
                        <div className="col-3"></div>
                        <div className="col-3" style={{ position: 'fixed', zIndex: '1000', maxWidth: '100px', left: 0 }}>
                            <div className="profilePic"
                                style={{
                                    background: user.profileImage ? `url(${user.profileImage})` : 'url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png)',
                                    backgroundPosition: "center",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }} />
                            <p className="text-center">Me</p>
                        </div>
                        {
                            user?.peers.length > 0 &&
                            <div className="col-9" style={{ margin: '3.5px auto' }} >
                                <PeerCollection peers={user?.peers} />
                            </div>

                        }

                    </div>
                }
        </div>
           
            <div style={{marginTop:'150px'}}>
                {

                    posts && <React.Fragment>
                        {
                            posts.length > 0 ?
                                <React.Fragment>

                                    {posts.map((post, i) => <PostCard key={i} {...post} />)}
                                </React.Fragment>
                                :
                                <p>No Posts Yet </p>

                        }
                    </React.Fragment>
                }
            </div>
           
        </div>
    )
}

export default TimeLineDashboard
