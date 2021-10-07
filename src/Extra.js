import React from 'react'


const Extra = (props) =>{
    const { nasaExtra } = props

    return(
        <div>
           <h2>{nasaExtra.title}</h2> 
           <p>copyright:{nasaExtra.copyright}</p>
           <p>{nasaExtra.date}</p>
        </div>
    )
}
export default Extra