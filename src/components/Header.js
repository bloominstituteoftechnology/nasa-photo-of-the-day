import React from "react";

function Header(props){
    return(
        <div className="date">
<h2>{props.theDate.date}</h2>
        </div>
    );
};

export default Header