import React from "react";

function Title(props) {
    console.log(props.titleArray.title)
    return(
        <div>
            <h2>{props.titleArray.title}</h2>
        </div>
    )
}

export default Title