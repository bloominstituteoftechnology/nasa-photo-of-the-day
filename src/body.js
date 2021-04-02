import React from 'react';

function Body(props) {
    console.log(props)
    return (
        <div id="mainBody">
            <img src={props.url} id ="imageSky" />
            <p id="bodyText">{props.explanation}</p>
            </div>
    );
}
export default Body;