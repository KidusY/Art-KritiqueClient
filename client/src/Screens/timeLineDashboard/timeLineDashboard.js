import React, { useEffect, useState } from 'react'
import './timeLinestyle.css';
import PostCard from '../../postCard/postCard'
import PeerCollection from '../../peersCollection/peersCollection'


function TimeLineDashboard({ userInfo }) {
    const [currentUserInfo, setCurrentUserInfo] = useState(null);

    useEffect(() => {
        const info = sessionStorage.getItem('userInfo');

        setCurrentUserInfo(JSON.parse(info));
    }, [])


    const user = userInfo || currentUserInfo;


    return (
        <div>
            <h1 className="logo">Art-Kritique </h1>

            {
                user && <React.Fragment>
                    {user?.peers.length > 0 ? <PeerCollection />
                        : <p>No peers to Show </p>
                    }

                    {
                        user?.posts.length > 0 ?
                            <React.Fragment>

                                {user?.posts.map(post => <PostCard {...post} />)}
                            </React.Fragment>
                            :
                            <p>No Posts Yet </p>
                    }


                </React.Fragment>
            }







        </div>
    )
}

export default TimeLineDashboard
