import React from 'react';

const Photo = ({ image, title, description }) =>{
    // const { image, title, description } = props;

    
     if (!image) return <h3>Loading...</h3>;
    
     return (
        <div>
            <h2>{ title }</h2>
            <img src={image} alt='It is the photo of the day from nasa!' />
            <p>{ description }</p>
        </div>
            
        )
    }   

export default Photo;
