import React from "react";
import "../../App.css";
import Astros from "../Astro/Astros";
import styled from "styled-components";
// import Vplayer from "../Vid/Vplayer";
// import "./App.css";
// import Astros from ".../Astro/Astros";
// import SearchBar from "./components/Searchbar/SearchBar";
///Optionionally selected div
let WrapperDiv = styled.div`
    

    ${props => (props.ff === 'selected' ? `background: #fdd835; width:100%;height:100%;` : null)}
`;

// The container 
const TheContainer = styled.div`
        max-width: 800px;
        margin: 50px auto;
        padding: 30px;
        display: flex;
        flex-direction: column;

        justify-content: space-evenly;
        align-items: center;

`;

const TheCards = styled.div`
        padding:1px;
        margin:1px;
        height:100%;
        width: 100%;

`;



function Container() {
  return (
      <TheContainer>
          <TheCards>
              <Astros />
          </TheCards>
      </TheContainer>
  );
}

export default Container;