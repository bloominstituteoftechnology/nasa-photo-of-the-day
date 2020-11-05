import React from 'react';

const Photo = (props) =>{
    const { image } = props;
    console.log(props);
        // title, explanation
     if (!props.image) return <h3>Loading...</h3>;
    
     return (
        <div>
            
            <img src={image} alt='It is the photo of the day from nasa!' />
            
        </div>
            
        )
    }

export default Photo;
