import React from "react"
import styled from "styled-components"
import ImagesList from "./ImagesList"
import styles from "./styles"



const ImageCard= props =>{
    console.log(props);

    return(
        <Wrapper>
        
        <Title>title={props.title}</Title>
        <span>key={props.data} </span>
        <img>Img={props.hdurl} </img>
        <p>saywhat={props.explanation}</p> 
        
        <span>date={props.date} </span>
        <p>copyright={props.copyright}</p>
                
    </Wrapper>




       
    )
}
export default ImageCard;