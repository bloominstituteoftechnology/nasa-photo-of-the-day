import React from "react";
import Card from "./Card"
import styled from "styled-components";

const StyledCardsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    background-color: #787A91;
`

const Cards = (props) => {
    const { title, imageURL, explanation, date, copyright } = props
    return (
        <StyledCardsContainer className="cards-container">
            <Card title={title} imageURL={imageURL} explanation={explanation} date={date} copyright={copyright}/>
        </StyledCardsContainer>
    )
}

export default Cards;