import React, { useState } from 'react';

const Explanation = props => {

    const { nasaExplanation, nasaImageTitle } = props;

    return (
        <div>
            <h3>
                {nasaImageTitle}
            </h3>
            <p className="photoInfo">
                {nasaExplanation}
            </p>
        </div>
    )
}

export default Explanation;