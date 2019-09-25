import React from 'react';

export default function ImageCard(props) {
    console.log(ImageCard);
    return (
        <div 
            className={props.cardBox} 
            key= {props.id}>
                <h1> {props.titleOf}</h1>
            <h3>Image date: {props.dateOf}</h3>
            <img 
                className="image" 
                alt="no pic" 
                src={props.picture}
            />
            <p> Description :{props.description}</p>
        </div>
    );
};
 