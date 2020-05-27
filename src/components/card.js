import React from "react"

const Card = props => {
    console.log(props)
return(
    <div>
        <p>one</p>
        <p>two</p>
        <p>three</p>
        <p> description:{props.explanation}</p> 
        {/* <img src = {nasaData.img}></img>
         */}
     </div>
    
)
}

export default Card