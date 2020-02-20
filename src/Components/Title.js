import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
    font-size: 2em;
    text-aligned:center;
    color:blue;
`;

//wrapper to render a section tag
const Wrapper = styled.section`
    padding:2rem;
    background: #96939b;
`;

const Title = () => {
    return(

        <Wrapper>
            <PageTitle>
                NASA's Photo of the Day
            </PageTitle>
        </Wrapper>
       
    )
}


export default Title;
