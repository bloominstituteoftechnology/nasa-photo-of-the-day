import React, { useState } from 'react'

const Explanation = props => {
    const { explanation } = props;
    
    return (
        <div className ='explanation'>    
         <h3>{explanation}</h3>
        </div>
    )
    // console.log(nasaData.url)
}


export default Explanation;