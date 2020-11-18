import React from "react"
function Info(props) {
    let {infoText} = props;
    return (
    <div class = "infoText">
        <h5>{infoText}</h5>
    </div>
    )
}


export default Info;