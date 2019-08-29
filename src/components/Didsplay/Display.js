import React from "react";
import DisplayImg from "./DisplayImg";
import Information from "./Infomaration";
import styled from "styled-components";


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

const Display = props => {
  return (
    <Container>

        <Information  
        title={props.title}  // here is the title <h1>
        description={props.description}
        />
        
      <DisplayImg 
      imgSrc={props.imgSrc}  />
    </Container>
  );
};
export default Display;
