import React from "react";

const ViewSpace = (props) => {
const {showImage} = props;

    return (
        <button onClick={showImage}>Let's look at space</button>
    )
}


export default ViewSpace;