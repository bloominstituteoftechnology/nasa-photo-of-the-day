import React, {useState} from "react"
import axios from "axios"
import API from "./API"


const Summary = (props) => {


    const { text }  = props;

    return (

        <div className = 'Summary' >
            {props.data.summary}
        </div>


    )



}

export default Summary