import React from 'react'

export const Photo = (props) => {    
        
            const {details} =  props
    
    return(
     
    <div>
        <h1>{details.title}</h1>      
        <img src = {details.url}></img>
        <p>{details.explanation}</p>
        <p>{details.date}</p>
        <p>copyright: {details.copyright}</p>
    </div>
  
  
    )
        
    
}
export default Photo