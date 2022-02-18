import React from "react"; 
import SC from "styled-components";
const HalfWidth = SC.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50vw;
height: 500px;
padding:2%;
`

const Title = SC.h1`
color:${props=>props.theme.title_color};
font-size:${props=>props.theme.title_size};
`

const Copyright = SC.p`
color:${props=>props.theme.title_color};
`
const Date = SC.div`
white-space: nowrap;
`
const Description = SC.p`
font-size:${props=>props.theme.content_text_size};
padding: 2%;
`
const InfoRight = SC.div``

const InfoLeft  = SC.div``

//<div className={props.cName}>
export default function PodData(props){
    return(
        <HalfWidth>
            <Title>{props.title}</Title>
            <div>
                <InfoLeft>
                    <Description>{props.description}</Description>
                </InfoLeft>
                <InfoRight>
                    <Date>Date: {props.date}</Date>
                    <Copyright>Copyright: {props.copyright}</Copyright>
                </InfoRight>
            </div>
        </HalfWidth>
    )
}