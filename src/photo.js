import React from"react"

const help = (props) =>{ 
const {help} = props
return (
    <div>  
    <header> 
      <h1>{help.title}</h1>
    </header>
        <img src={help.hdurl} alt ='space'></img>
        <p>{help.explanation}</p>
    </div>
)
}

export default help