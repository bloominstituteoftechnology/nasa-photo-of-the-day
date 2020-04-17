import styled from 'styled-components';

const ExplaWrapper = styled.div`
    
    background: linear-gradient(to top, #c337637c, #1d257180);
    display: flex;
    flex-direction: column;
   
    padding: 50px;
    
    border-radius: 5px;
    border: 2px solid black;
    
    box-shadow: 0 1px 1px 0px black;
    margin: 30px 0 30px 50px;
    width: 90%;
`;

const ExplaText = styled.p`
    font-size: 19px;
    font-weight: bold;
    width: 50%;
    margin-left: 300px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 1px 1px 1px 1px black;
    background: linear-gradient(to bottom, #ada996c2, #f2f2f2c0, #dbdbdba6, #eaeaea91);
    `;

export { ExplaWrapper, ExplaText };