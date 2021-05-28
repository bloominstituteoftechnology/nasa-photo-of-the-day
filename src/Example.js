
import styled from 'styled-components';
export const DivWrapper = styled.div`
 background-color: #7f7fff;
 font-size: 16px;
 font-family: sans-serif;
 `;
export const  ContainerDiv= styled.div`
background-color:yellow;
color: white;
 width: 100vw;


${props=> (props.date ==="2021-05-27" ? `background-color: primary`: `background-color: blue`)}
`;
export const ImageNasa = styled.img`
border-radius:100px;
border: 2px solid wheat;
padding: 5px 30px;
background-color: green;
&:hover{
 width: 100%;
 background-color: black;
}
`;
export const H1 = styled.h1`
letter-spacing: 1.3rem;
font-size: 28px;
text-align: center;
`;
