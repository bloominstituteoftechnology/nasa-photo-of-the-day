import React from "react";

function Footer(props){
    return(
        <div className="foot">
    <p>Image Credit and Copyright: {props.foot.copyright}</p>
    </div>
    );
};
export default Footer