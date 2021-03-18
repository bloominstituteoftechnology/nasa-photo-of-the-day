import React from"react"

const help = (props) =>{ 
const {help} = props
return (
    <div>  
    <header> 
      <h1>{props.title}</h1>
    </header>
        <img src={help.hdurl} alt ='space'></img>
    </div>
)
}

export default help