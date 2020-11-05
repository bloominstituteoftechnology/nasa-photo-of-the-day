import React from 'react';


const WhoWhen = (prop) => {
    const {photoData} = prop;
    return(
    <div id='WhoWhen'>
        <h2> {photoData.title}</h2>
        <h3> By {photoData.copyright} on {photoData.date}</h3>
        
    </div>
    )
}

export default WhoWhen;
