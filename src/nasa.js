import React from 'react';


const NasaPhoto = props => {
    const { nasaData } = props;
    
    return (
        <div className ='NasaPhoto'>
            <img src={nasaData.url} alt='Nasa pic of the day'/>
        </div>
    )
    // console.log(nasaData.url)
}

export default NasaPhoto;