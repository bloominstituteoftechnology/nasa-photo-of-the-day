import React, {useState, useEffect} from 'react'



const PhotoCard = (props) => {

    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.image}/>
            <p>{props.exp}</p>
        </div>
    )


}

export default PhotoCard