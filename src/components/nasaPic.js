import React from "react"
import{CardImg} from "reactstrap"

const NasaPic = (props) => {

    return(
        <CardImg height="400px"src={props.img} alt='Shot from space'></CardImg>
    )
}

export default NasaPic