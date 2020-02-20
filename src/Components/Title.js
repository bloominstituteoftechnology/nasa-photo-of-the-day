import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
    font-size: 2em;
    font-style:italic;
    text-aligned:center;
    color:aliceblue;
    text-align: center;
`;

//wrapper to render a section tag
const HeaderWrapper = styled.section`
    padding:4px;
    background: #53687e
    ;
    width:80%;
    margin:auto;
`;

const Title = () => {
    return(

        <HeaderWrapper>
            <PageTitle>
                NASA's Photo of the Day
            </PageTitle>
        </HeaderWrapper>
       
    )
}


export default Title;
