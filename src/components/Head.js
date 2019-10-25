import React from "react";
import styled from "styled-components";

const HeadWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SiteTitle = styled.h1`
    color: white;
`;

const ImgName = styled.h2`
    color: white;
`;

const ImgDate = styled.h2`
    color: white;
`;


const Head = props => {
    return (
        <HeadWrap key={props.id}>
        <SiteTitle>The NASA picture of the day 🚀!</SiteTitle>
        <ImgName>{props.title}</ImgName>
        <ImgDate>{props.date}</ImgDate>
        </HeadWrap>
    );
  };
  export default Head;