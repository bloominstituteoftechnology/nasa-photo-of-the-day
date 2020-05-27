import React from "react"

const NasaPic = (props) => {
    console.log(props)
    return(
        <img className="nasaImg" src={props.img} alt='Shot from space'></img>
    )
}

export default NasaPic