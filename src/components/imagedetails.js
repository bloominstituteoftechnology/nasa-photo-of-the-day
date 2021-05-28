import React from 'react';



const imagedetails = props => {

    const { image, title, date } = props;

    return (
        <div>
            <div>  
              <img src={image} alt="space image from Nasa"></img> 
            </div>
            <div>
              <h2>{title}</h2>
            </div> 
            <div>
               <p>Date: {date}</p>
            </div>
            </div>
            )
}

export default imagedetails;