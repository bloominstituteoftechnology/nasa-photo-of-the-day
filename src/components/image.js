import React from 'react';

    const Photo = (props) => {
        
        return (
            <div>
                <h2>{props.image.title}</h2>
                <div>
                    <img src={props.image.url} />
                </div>
                <p>{props.image.explanation}</p>
            </div>
            
        )
    }
    export default Photo;
