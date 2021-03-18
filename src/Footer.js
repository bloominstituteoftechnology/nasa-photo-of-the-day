import React from"react"

const data = (props) =>{ 
    const {data} = props
    return (
        <div>  
        <h2>Copyright: {data.copyright}</h2>
        <p>Date: {data.date}</p>
        </div>
    )
    }
    
    export default data