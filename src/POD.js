import React from 'react';
import styled from 'styled-components';

const POD =({title,date,url,explanation,copyright})=>{
    const PODDiv = styled.div `

        h2 {
        font-size: 30px;
        background-color: ${pr => pr.theme.backgroundColor};
        }    

        p {
        font-size: 20px;
        font-style: italic; 
        text-decoration: underline;
        }

        h2, p {
        color: ${pr => pr.theme.primaryColor};
        font-weight: bold;
        }    

        h2:hover, p:hover {
            color: ${pr => pr.theme.secondaryColor};
            cursor: pointer;
        }

        h2:hover {
            transform: scale(1.5);
            transition: all 2s ease-in-out;
            cursor: pointer;
        }

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