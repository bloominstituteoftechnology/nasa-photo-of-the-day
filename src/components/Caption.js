import React from "react";
import styled from "styled-components";

const StyledCaption = styled.div`
    p{
        margin: 0 10% 5% 10%;
    }
    button{
        color: ${props => props.theme.containerColor};
        background-color: #314c5e;
        margin-bottom: 4%;
        border: none;
        padding: 2.5%;
        border-radius: 20px;
    }
`

const Caption = props => {
    const { data } = props;
    // console.log("data", data.date)
    // const dateString = () => {
    //     const splitDate = data.date.split("-");
    //     return splitDate
    // }
    // const dateStr = dateString()
    return (
        <StyledCaption>
            <p>{data.date}</p>
            <p className='paragraph'>{data.explanation}</p>
            <p>copyright: {data.copyright}</p>
            <button>previous days photos </button>
        </StyledCaption>
    )
}

export default Caption;