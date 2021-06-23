import React from 'react';


function Header(props) {
    const {title, date} = props
    return(
    <div className = 'header'>
        <h1>NASA Photo of the Day</h1>
        <h2> Title: {title} </h2>
        <h3> Capture date: {date}</h3>
    </div>
    )
}

export default Header


