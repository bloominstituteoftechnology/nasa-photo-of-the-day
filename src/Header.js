import React from "react";
const Header = ({ date }) => {
    return ( 
<div> 
<h1 className ='headerTitle'>Astronomy Photo Of the Day</h1>

<h2>{date}</h2>
</div>
)
}

export default Header;