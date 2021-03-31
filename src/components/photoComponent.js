import React from 'react';



const Photo = props => {
    console.log(props);
    return (
    <div>
        <div>
            {props.title}
            <img src={props.hdurl} alt='nasa potd'/>
            </div>
            </div>
    )
}

export default Photo; 