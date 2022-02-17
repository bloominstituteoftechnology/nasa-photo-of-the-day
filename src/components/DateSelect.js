import React, { useState } from "react";
import SC from "styled-components";

const DateSelector = SC.div`
    margin-top:1%;
    display:flex;
    justify-content:center;
    a{
        vertical-align:middle;
        text-decoration:none;
    }
`

const SpaceBetweenDate= SC.div`
display:flex;
width:15%;
justify-content:space-between;
align-items:center;
`

const DirectionButtons = SC.a`
display:flex;
padding:2.5%;
background-color:${props => props.theme.button_background_color};
color:${props=>props.theme.button_text_color};
justify-content: center;
align-items:center;
font-size:${props=>props.theme.button_text_size};
    transition: background-color 0.2s;
    &:hover{
        background-color:${props=>props.theme.button_hover_background_color};
    }
`


export default function(props){
    return(
        <DateSelector>
            {
            <SpaceBetweenDate>
                <DirectionButtons href="/" onClick={(event)=>{event.preventDefault();let tempDate = new Date(props.currentDate); tempDate.setDate(tempDate.getDate()); props.setCurrentDate(tempDate)}}> {'Previous'} </DirectionButtons>
                    <input onChange={(event)=>{let tempDate = new Date(event.target.value); tempDate.setDate(tempDate.getDate() + 1);props.setCurrentDate(tempDate)}} value={props.currentDate} type="date"/>
                <DirectionButtons href="/" onClick={(event)=>{event.preventDefault();let tempDate = new Date(props.currentDate); tempDate.setDate(tempDate.getDate()+2); props.setCurrentDate(tempDate)}}> {'Next'} </DirectionButtons>
            </SpaceBetweenDate>
            }
            {/*left: go back one day, middle: select specific date, right: go forward one day*/}   
        </DateSelector>
    )
}