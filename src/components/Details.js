import React from 'react'


const Details = props =>{
    
    const {data} = props

    //Info of the photographer
    return (
        <div className="container-fluid">
            <h2>The photographer is {data.copyright}</h2>
            {props &&
            <>
              <p>{data.explanation}</p>
              <p>Photo was featured on {data.date}</p>
            </>
            }
           
        </div>
    )
}

export default Details