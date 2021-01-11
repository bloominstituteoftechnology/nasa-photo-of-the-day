import React from 'react'
import styled, {css} from 'styled-components';



const POD =({title,date,url,explanation,copyright})=>{
    const PODDiv = styled.div`

display: flex;
background-color: silver;
font-weight: bold;
border: dashed gold 5px


`;
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