import React from "react"
import "./Posts.css"
export default function Post(props){



    return(
        <div>
          <h2>{props.title}</h2> 
          <img className="nasaPic"src ={props.nasaPic} alt="Moon"/>
            </div>
    )
}