import React, { useState } from 'react'

const Explanation = props => {
    const { explanation } = props;
    
    return (
        <div className ='explanation'>    
         <p>{explanation}</p>
        </div>
    )
    // console.log(nasaData.url)
}


export default Explanation;