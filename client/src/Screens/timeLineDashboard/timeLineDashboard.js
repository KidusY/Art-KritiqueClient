import React from 'react'
import './timeLinestyle.css';
import PostCard from '../../postCard/postCard'
import PeerCollection from '../../peersCollection/peersCollection'


function TimeLineDashboard() {
    return (
        <div>
        <h1 className="logo">Art-Kritique </h1>


        <PeerCollection/>
        <PostCard />
        <PostCard />
        <PostCard />





        </div>
    )
}

export default TimeLineDashboard
