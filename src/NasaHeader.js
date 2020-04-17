import React from "react";
import styled from 'styled-components';



const NasaHeader = props => {
    console.log(props, "props")
    return (
        <div className="nasa-header" key="">
            <h1>NASA Photo of the Day!</h1>
            <h3>{props.title}</h3> 
            <h4>{props.date}</h4>
        </div>
    )
}

export default NasaHeader;