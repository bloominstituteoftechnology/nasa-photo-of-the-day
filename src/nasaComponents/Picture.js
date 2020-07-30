import React from "react"
import axios from 'axios';

const Picture = props => {
    const {data} = props;
    console.log(data);
    return (
        <div>
            <p>{data.title}</p>
            <img
            alt='picture'
            className='picture' 
            src={data.url}
            />
        </div>
    )
}

export default Picture
