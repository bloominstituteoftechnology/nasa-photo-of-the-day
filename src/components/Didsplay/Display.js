import React from "react";
import DisplayImg from './DisplayImg';

const Display = (props) => {

    return (
        <>
        <DisplayImg imgSrc={props.imgSrc} />
        </>
    )
}
export default Display;