import React from "react";


const Header = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[props.header.date.slice(5,7) -1]
    const day = props.header.date.slice(8)
    const year = props.header.date.slice(0,4)


    return (
        <div>
            <h1>Welcome to your NASA photo of the day!</h1>
            <h3>{month + " "+  day + ", " + year}</h3>
        </div>

    )
};


export default Header