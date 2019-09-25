import React from 'react';

export default function ImageCard(props) {
    console.log(ImageCard);
    return (
            <div 
                className="cardBox"
                key= {props.id}>
                  
                <h1> {props.titleOf}</h1>
                <p>-by {props.author}</p>

                <button
                        className="date-btn"
                    >
                    <p>{props.dateOf}</p>
                </button>

                <div className="imageBox">
                    <img 
                        className="image" 
                        alt="no pic" 
                        src={props.picture}
                    />
                </div>
                <h2>Description of the image</h2>
                <p>{props.description}</p>
             </div>
    );
};
 