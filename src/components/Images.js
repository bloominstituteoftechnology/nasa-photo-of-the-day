import React from 'react'
export default function Images(props){
    const {data} = props;
    return (
        <div className='imageClass'>
            <img src = {data.hdurl} alt='nasaimage'></img>
        </div>
    )
}