import React from 'react'
import styled from 'styled-components';



const POD =({title,date,url,explanation,copyright})=>{
    const PODDiv = styled.div`
display: flex;
background-color: black;
font-weight: bold;
border: dotted crimson 8px;
color: crimson;

`
    return (
        <PODDiv>
        <div>
            <h2>{title}<br></br>{date}</h2>
            <img src={url} alt = "pic of the day"/>
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
        </PODDiv>
    );
}

export default POD;