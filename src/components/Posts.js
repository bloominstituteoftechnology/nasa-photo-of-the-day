import React from "react"
import "./Posts.css"
export default function Post(props){



    return(
        <div>
          <h2>{props.title}</h2> 
          <iframe className="nasaVid"title ="vid" src ={props.nasaVid}/>
            </div>
    )
}