import React from 'react';
import styled from 'styled-components'
function PhotoCard(props) {
    console.log(props);
return (
    <div>
        <h2>{props.title}</h2>
        <img src={props.url} />
        <p>
            {props.explanation}
        </p>   
    </div>
);
}
export default PhotoCard;