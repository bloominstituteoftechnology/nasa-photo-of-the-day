import React from 'react'

const CloseButton = ({ setView }) => {
    return (
        <button onClick={() => setView('HOME')} className="CloseButton">Go Back 🚀</button>
    )
}

export default CloseButton;