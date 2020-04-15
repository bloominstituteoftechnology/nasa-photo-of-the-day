import styled from 'styled-components';

const ExplaWrapper = styled.div`
    margin: 30px;
    background: linear-gradient(to bottom, #ada996c2, #f2f2f2c0, #dbdbdba6, #eaeaea91);
    display: flex;
    justfiy-content: center;
    align-items: center;
    padding: 100px;
    
    border-radius: 5px;
    border: 2px solid black;
    
    box-shadow: 0 1px 1px 0px black;
`;

const ExplaText = styled.p`
    font-size: 19px;
    font-weight: bold;
    width: 50%;
    margin-left: 260px;
    border: 1px inset black;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 1px 1px 1px 1px black;
    `;

export { ExplaWrapper, ExplaText };