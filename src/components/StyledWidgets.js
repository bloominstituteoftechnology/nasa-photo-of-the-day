import styled from "styled-components";
import { primary } from "./StyleVariable";


export const Image = styled.img`
  max-width: 90vw;
  border: 10px solid white;
`;

export const Button = styled.button`
    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    
    font-size: 1em;
    margin: 1em;
    padding: 1em 5em;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    width: 90vw;
`;