import styled from "styled-components";

const InfoWrapper = styled.div`
   
    margin: 10px 0 20px 300px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    
    `;

    const Title = styled.div`
        color: black;
        font-family: 'Oswald', sans-serif;
        font-size: 18px;
        background: linear-gradient(to bottom, #ada996c2, #f2f2f2c0, #dbdbdba6, #eaeaea91);
        border-radius: 5px;
        border: 1px solid black;
        margin: 0px 0 10px 0;
        padding: 30px;
        box-shadow: 1px 1px 1px 1px black;
        `;

    export { InfoWrapper, Title };