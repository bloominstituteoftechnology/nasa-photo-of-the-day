import styled from "styled-components";

const InfoWrapper = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px 0 0px 338px;
    background: linear-gradient(to bottom, #ada996c2, #f2f2f2c0, #dbdbdba6, #eaeaea91);
    width: 50%;
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    box-shadow: 0 1px 1px 0px black;
    `;

    const Title = styled.div`
        color: black;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        `;

    export { InfoWrapper, Title };