import React from 'react'
import {withRouter} from 'react-router-dom'
function goBackBtn(props) {
    return (
        <React.Fragment>
            <button className="btn" style={{ width: "80px", margin: '2px', padding: '2px', color: "#a8790e" }}
                onClick={() => props.history.goBack()}
            >
                <i className="fas fa-long-arrow-alt-left"></i> Back
            </button>
        </React.Fragment>
    )
}

export default withRouter(goBackBtn);
