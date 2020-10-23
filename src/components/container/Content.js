import React from 'react'
import styled from "styled-components";

const ContentContainer = styled.div`
  margin: 0rem 0 3rem 0;
  width: 100%;
  box-shadow: 0px 0px 30px -12px rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  border-radius: 20px;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;


const Content = props => {
  console.log(props.content)
  return (
    <ContentContainer className="content">
      <TopContent className="top__content">
        <h3>{props.content.title}</h3>
        <p>{props.content.date}</p>
      </TopContent>
      <p>{props.content.explanation}</p>
      {props.content.copyright ? <p>-{props.content.copyright}</p> : <p> </p>}
    </ContentContainer>
  )
}

export default Content
