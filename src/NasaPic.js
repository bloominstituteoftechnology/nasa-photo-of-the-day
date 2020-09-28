/* eslint-disable no-unused-vars */
import React from "react"
import {StyledDiv} from './components/Pics'


function NasaPics (props) {
    return(
        < StyledDiv className="nasaPics">

        <title>test</title>
        <h1>{props.data.title}</h1>
        <h2>{props.data.date}</h2>
        <img src = {props.data.url} />
        <div className = "text">
            <p>{props.data.explanation}</p>
        </div>

        </StyledDiv>
           

    )
}
export default NasaPics;