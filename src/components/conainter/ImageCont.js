import React from "react";

export default function ImageCont (props) {
    return (
        <div className="imageCont">
            <img src={props.image} alt="NASA pic of the day"
            style={{
width:"50%"
 }}
            />
        </div>
    );
}