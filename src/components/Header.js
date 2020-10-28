import React from 'react';

export default function Header(){
    const title = "NASA APOD";
    const subTitle = "Astrological Photo of the Day"
    
    return(
    <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
    </div>
    )
}