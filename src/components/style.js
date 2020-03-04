import styled from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "darkblue" : "purple")};
  color: ${props => (props.primary ? "white" : "purple")};
  display: flex;
  justify-content: Flex-end;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid whitesmoke;
  border-radius: 3px;
`;
const padding = "2%";

export const Section = styled.section`
  color: white;
  padding: ${padding};
  background: ${props => props.background};
`;
