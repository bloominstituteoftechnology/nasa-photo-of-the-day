import styled from "styled-components";

const PictureWrapper = styled.div`

    display: flex;
    justify-content: center;
    margin: 30px 0 20px 140px;
    width: 80%;
    height: 78vh;
    
    
    border-radius: 10px;
    background: linear-gradient(to top, #c337637c, #1d257180);
    border: 2px solid black;
    box-shadow: 0 1px 1px 0px black;
    `;

    const Picture = styled.img`
        margin: 10px;
        height: auto;
        width: 50%;
        border: 1px solid black;
        `;

export { PictureWrapper, Picture };