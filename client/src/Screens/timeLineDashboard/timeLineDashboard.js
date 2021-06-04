import React, { useEffect, useState } from 'react'
import './timeLinestyle.css';
import PostCard from '../../postCard/postCard'
import PeerCollection from '../../peersCollection/peersCollection'
import axios from '../../axios/axios'


function TimeLineDashboard({ userInfo }) {
    const [currentUserInfo, setCurrentUserInfo] = useState(null);
    const [allUsers,setAllUsers]= useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const info = sessionStorage.getItem('userInfo');
        setCurrentUserInfo(JSON.parse(info));
        axios('/posts').then(res => setPosts(res.data)).catch(err => console.log(err));

    }, [])


    const user = userInfo || currentUserInfo;


    return (
        <React.Fragment>
            <h1 className="logo">Art-Kritique </h1>

            {
                user && <React.Fragment>
                    {
                        user?.peers.length > 0 ? <PeerCollection />
                        : <p>No peers to Show </p>
                    }
                </React.Fragment>
            }

            {
                posts && <React.Fragment>
                    {
                        posts.length > 0 ?
                            <React.Fragment>

                                {posts.map((post,i) => <PostCard key={i} {...post} />)}
                            </React.Fragment>
                            :
                            <p>No Posts Yet </p>

                    }
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default TimeLineDashboard
