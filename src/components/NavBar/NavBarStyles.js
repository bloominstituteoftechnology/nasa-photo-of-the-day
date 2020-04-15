import styled from "styled-components";



const HeaderWrapper = styled.div`
    border: 2px solid black;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, #b92c2798, #1565c093);
    box-shadow: 0 1px 1px 0px black;

`;

const ImgWrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`;

const LogoText = styled.p`
    font-size: 35px;
    padding-left: 50px;
    cursor: pointer;
    color: white;
    font-family: 'Gugi', cursive;
    `;

    const IconMain = styled.i`
        font-size: 40px;
        border: 1px dotted black;
        padding: 5px;
        cursor: pointer;
        filter: brightness(0) invert(1);
        `;





export { HeaderWrapper, ImgWrapper, LogoText, IconMain };