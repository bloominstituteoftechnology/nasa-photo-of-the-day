import React from 'react';

const Title = props => {
    const {photo} = props 
    
    return (
        <div className='title'>
         <h1> {photo.title} </h1>
            
        </div>
  )
}

export default Title;