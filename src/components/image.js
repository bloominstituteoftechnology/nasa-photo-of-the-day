import React from "react";
import styled from "styled-components";

const ContentStyle = styled.div`
display: flex;
justify-content: center;
flex-flow: column nowrap;
margin-bottom: 30px;
background: black;
color: white;
text-align: center;
`

const ImageStyle = styled.div`
height: 100%;
`

const Image = props => {
    return (
        <ContentStyle>
            <ImageStyle>
            <img src={props.img}/>
            </ImageStyle>
            <span>Copyright: {props.copy}</span>
        </ContentStyle>
    )
}

export default Image;