import React from "react";
import styled from "styled-components";
import DataPass from "./DataPass";

const HeadWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;



const ImgName = styled.h2`
    color: white;
`;

const ImgDate = styled.h2`
    color: white;
`;


const Head = (props) => {
    return (
        
        <HeadWrap>
        <DataPass title={props.title} url={props.url} explanation={props.explanation} date={props.date} />
          <ImgName> {props.title} </ImgName>
          <ImgDate> {props.date} </ImgDate>
        </HeadWrap>
    );
  };
  export default Head;