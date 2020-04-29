import React from "react";

const Header = props => {
return (
    <div className = "Header" key = {props}>
     <p>{props.date} </p>
    <h1>{props.title}</h1>
    <p> Image Credit & Copyright : {props.copyright}</p>
    </div>
)

}
export default Header