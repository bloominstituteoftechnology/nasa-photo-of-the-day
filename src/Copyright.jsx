import React from "react";

const Copyright = (props) => {
    const {respData} = props
    return(
        <div>
            {respData.copyright} 
        </div>
    )
}

export default Copyright;