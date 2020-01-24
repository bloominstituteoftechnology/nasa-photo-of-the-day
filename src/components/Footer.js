import React from "react";

function Footer(props){
    return(
        <div className="foot">
    <p>{props.foot.copyright}</p>
    </div>
    );
};
export default Footer