import React from "react"
import styled from "styled-components"


const Imagestyle = styled.img`

    width: 600px;
    height: 600px;
    display: flex;
    padding-left: 75px;
    


`


export default function Image(props){

    const {img, alt} = props;
    

    return (
        <Imagestyle src={img} alt={alt}/>
    )


}