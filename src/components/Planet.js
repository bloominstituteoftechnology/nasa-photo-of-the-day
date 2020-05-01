import React from "react";

const Planet =(props) => {
    return (
        <div>
            {/* <img alt="Head Image" src={props.headImage}/> */}
            <div>
                <div>{props.title}</div>
                <div>{props.date}</div>
                <div>{props.description}</div>
                <img src={props.imgUrl} alt="Earth Image"></img>
                <div>{props.copyright}</div>
                <div>{props.title}</div>
            </div>
        </div>
    );
}

export default Planet;
