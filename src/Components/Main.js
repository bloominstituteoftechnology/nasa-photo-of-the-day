// imports
import React from 'react';

// Export default content
function Main(props) {
    const { nasaImg, nasaExp, nasaCopyright } = props;
    return (
        <div>
            <img src={nasaImg} width= '65%' alt="Nasa Photo of the Day"/>
            <p>{nasaExp}</p> 
            <span>{nasaCopyright}</span>
        </div>
    )
}

export default Main;