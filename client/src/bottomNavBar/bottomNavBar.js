import React from 'react'
import { withRouter } from 'react-router-dom'
import './bottomNavStyle.css'

function BottomNavBar(props) {
    return (
        <div className="bottomNavContainer">
            <ul>
                <li><i class="fas fa-home"></i></li>
                <li> <i class="fas fa-search" onClick={() => { props.setShowSearchPeerModal(!props.showSearchPeerModal)}}></i></li>
                <li><i class="fas fa-plus"></i> </li>
                <li><i class="fas fa-user"></i></li>
            </ul>
        </div>
    )
}

export default withRouter(BottomNavBar);
