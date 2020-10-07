import React from 'react'

function Explanation(props){
    const {explain} = props
    return(
        <div className='exp'>
            <h2>Explanation: </h2>
            <p>{explain}</p>
        </div>
    )
}

export default Explanation