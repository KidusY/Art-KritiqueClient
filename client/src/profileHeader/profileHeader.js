import React from 'react'
import './profileHeader.css'
function ProfileHeader(props) {
    return (
        <div className="profileHeaderContainer">

        <div className="profileInfo d-flex">
        <div>
                    <div style={{
                        background: "url(https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        border: "4px solid #a8790e",
                        width: "100px",
                        height: "100px",
                        borderRadius: "100%"

                    }} />

                    <p className="text-center text-primary"> Edit </p>
        </div>
              
                
                <div style={{ width: '70%' }}>
                    <p className="m-3"> {props.userInfo.displayName} </p>
                    <ul className="d-flex justify-content-evenly" style={{width:'100%', listStyle:"none", padding:0}}>
                        <li>Likes <br/> 100</li>
                        <li>Peers <br /> 100</li>
                        <li>Curated <br /> 100</li>
                    </ul>
                </div>
               
                

        </div>

        <div>
                   <p className="text-center"> Bio Goes here </p> 
        </div>
            
        </div>
    )
}

export default ProfileHeader
