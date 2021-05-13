import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import styled from 'styled-components'

const ContainerDiv = styled.div`
max-width: 100%;
display:flex;
border: 2px solid red;
flex-wrap: wrap;
justify-content: center;
`
const Image = styled.img`
max-width:60%;
`

const PostHolder = styled.div`
width:100%;
`
const Date = styled.h1`
color: red;
margin: 4% 5% 1% 5%;
`
const Caption = styled.p`
text-align: center;
border: 1px solid green;
max-width:60%;
margin:0 auto;
`

const ShowMore = styled.h1`
color:red;
`

export default function Images(props){
    const [captionOpen, setCaptionOpen] = useState(null)
    const {nasaData, setCount, count} = props


return (
    <ContainerDiv>
        {nasaData.map((obj, index) => {
            return (
                <PostHolder key={index}>
            <Date>NASA photo of the day {obj.date}</Date>
            <Image src={obj.url} alt="test"/>
            <Caption onClick={() => setCaptionOpen(index)}>{captionOpen === index ? obj.explanation : `${obj.explanation.slice(0,100)} + ...click to read more`}</Caption>
            </PostHolder>
            )
        })}
        <ShowMore onClick={() => setCount(count + 3)}>test</ShowMore>
        </ContainerDiv>
)
}