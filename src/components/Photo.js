import React from "react"
import Text from "./Text"

const Photo = (props) => {
    return(
    <div>
        <div>
            <img src={props.data.url} alt="#"></img>
        </div>
        <Text exp = {props.data.explanation} title = {props.data.title}/>
        
    </div>
    )
}

export default Photo



