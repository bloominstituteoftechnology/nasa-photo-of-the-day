import React from "react";
import PhotoCardInfo from "./components/PhotoCardInfo.js";
import DatePickerComponent from "./components/DatePickerComponent";
import StaticDatePicker from "./components/StaticDatePicker.js";
import {CardContainer} from "./components/CardStyles.js";
import logo from './logo.png';
import background from "./sky.jpg";
import styled from "styled-components";
import {Header, AppLogo, MainHeading} from "./components/Header.js";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url(${background});
    background-size: cover;  
    
    @media screen and (max-width: 800px) {
      width: 100%;
        
    }

    @media screen and (max-width: 500px) {
      width: 100%;
        
    }
    

`;

function App() {  

  return (
    <Container>
     
      <Header>

        <AppLogo>
            <img src={logo} alt="logo" />
        </AppLogo>

        <MainHeading>photo of the day</MainHeading>                     
     
      </Header>

      <CardContainer>
            
        {/*<DatePickerComponent />   */}
        <StaticDatePicker />

      </CardContainer>

    </Container>
  );
}

export default App;



