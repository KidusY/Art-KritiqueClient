import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function spinner() {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '50px', height: '50px', transform: 'translate(-25px,-25px)' }}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default spinner
