import React from "react"
function Header(props) {
    let {copyright, date, title} = props;
    return (
    <div class = "header">
        <h1>{title}</h1>
        <h2>{copyright}</h2>
        <h3>{date}</h3>
    </div>
    )
}


export default Header;