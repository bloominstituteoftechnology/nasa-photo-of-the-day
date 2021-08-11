import React, { useState } from "react";

function Explanation(props) {
    const { explanation } = props;
    return (
        <div className='descriptionContainer'>
            <p>{explanation}</p>
        </div>
    )
}

export default Explanation;