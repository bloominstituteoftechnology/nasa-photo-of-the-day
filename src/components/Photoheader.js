import React from 'react'



export default function Photoheader(props) {
    const { photoUrl } = props
return (
    <div className='container'>
        <img alt='Nasa of the day' className='image' src={photoUrl}></img>
    </div>
)
}