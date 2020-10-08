import React, {useState, useEffect} from 'react'


const Picture = (props) => {


    return (
        <div>
            
            <img src={props.data.url} alt={props.data.title}></img>
        </div>
    )
}

export default Picture;