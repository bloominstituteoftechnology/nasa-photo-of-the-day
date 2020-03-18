import React from 'react'


const DailyImage = ({imageData}) => {
    console.log(imageData);
    return (
        <div>
            <img src={imageData} alt='img'/>
        </div>
    )
}

export default DailyImage
