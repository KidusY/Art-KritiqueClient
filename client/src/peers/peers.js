import React from 'react'
import './peersStyle.css'
function Peers({ img }) {
    return (
        <div className="peers" style={{
            background: `url(${img})`, backgroundPosition: "center",
            backgroundSize: "cover",
            border: "4px solid #a8790e"
        }} />


    )
}

export default Peers;
