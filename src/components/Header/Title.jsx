import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
    margin: 0 50px;
`

const Title = () => {
    return (
        <TitleDiv className="title-container">
            <h1>NASA Daily Photo</h1>
        </TitleDiv>
    );
};
export default Title;