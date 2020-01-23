import React from 'react';
import './DayPhoto.css';






const DayPhoto = props => {
    return (
        
        <div class="background-container" style={{backgroundImage: `url(${props.image})`}}>
            {/* <img src={props.image} alt="" /> */}
            
        
        
        
        </div>
    );
};

export default DayPhoto;