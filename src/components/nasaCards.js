import React, {useState} from "react";
import Card from "./card"

const NasaCards = (props) => {
    console.log(props)
const nasaData = {props}
return(
    <div>
        <h1>NASA picture of the day!</h1>
        <Card nasaData={nasaData}/>
</div>)

}

export default NasaCards;