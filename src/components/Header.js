import React from "react";

function Header(props){
    return(
        <div className="date">
<h1>{props.header.title}</h1>
<h2>{props.header.date}</h2>
        </div>
    );
};

export default Header