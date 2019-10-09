import React from 'react';

const Description = (props) => {

    return (
        <div>
        <h5>CAPTION</h5>
        <p className="description">{props.description}</p>
        </div>
    )
}
export default Description;