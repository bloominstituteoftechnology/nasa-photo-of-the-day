import React from "react";
import styled from "styled-components";
import Head from "./Head";

const MainBody = styled.div`
  background: black;
  width: 80%;
  margin: 0 auto;
`;

const SiteTitle = styled.h1`
    color: white;
`;



function Body() {

    return (
        <MainBody className="main">
            <SiteTitle>The NASA picture of the day 🚀!</SiteTitle>
            <Head />

        </MainBody>    
      
    );
}
  
  export default Body;