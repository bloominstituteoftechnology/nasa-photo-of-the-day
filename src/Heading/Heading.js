import React from 'react'

export default function H(props) {
    const { title, copyright, img} = props
        
    
    return (
     <div className='title'>
        <h1>{title}</h1>
        <img src={img} alt='the Mammatus Clouds'/>
        <p>{copyright}</p>
     </div>
    )

}


