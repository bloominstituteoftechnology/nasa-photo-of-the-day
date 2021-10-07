import React from 'react'
import styled from 'styled-components'


const Inner = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 40px;
  @media (min-width: 768px) {
      width: 50%;
      height: 100%;
  }
`;

const Title = styled.h2`
font-size: 24px;
    color: black;
    text-align: center;
    font-weight: 700;
    color: #181818;
    text-shadow: 0px 2px 2px #a6f8d5;
    position: relative;
    margin: 0 0 20px 0;
  @media (min-width: 768px) {
      font-size: 30px;
    };
`

const Subtile = styled.time`
color: #b0215e;
text-align: center;
`;

const InnerCard = ({ data }) => {
    

    const { title, explanation, copyright, date } = data
    return (
        <Inner>
          <Title>{title}</Title>
          <Subtile>{`Copyright: ${copyright}, Date: ${date}`}</Subtile>
        </Inner>
    )
}

export default InnerCard