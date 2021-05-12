import React from "react";


const Header = ( props ) => {
    const { imgTitle } = props;
    
    return (
    <div className="header">
        <h1>{imgTitle}</h1>
    </div>
    )
}

export default Header;

