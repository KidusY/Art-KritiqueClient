import React from 'react'
import { withRouter } from 'react-router-dom'
import './bottomNavStyle.css'

function BottomNavBar(props) {
    return (
        <div className="bottomNavContainer">
            <ul className="d-flex">
                <li><i className="fas fa-home" onClick={()=>{props.history.push('/timeline')}}></i></li>
                <li> <i className="fas fa-search" onClick={() =>  props.setShowSearchPeerModal()}></i></li>
                <li><i className="fas fa-plus" onClick={() => props.showHideUploadFileModal()}></i> </li>
                <li><i className="fas fa-user" onClick={()=>props.history.push('/profile')}></i></li>
            </ul>
        </div>
    )
}

export default withRouter(BottomNavBar);
