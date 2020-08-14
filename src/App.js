import React  from 'react';
import './App.css';
import PhotoList from './Components/PhotoList';
import Styled from 'styled-components';


const AppDiv = Styled.div`
background-color: blue;
color:yellow;
text-align: center;
padding-left: 90px;
padding-right: 90px;
width:100%;
`

const HeaderDiv = Styled.div`
border-color:red;
border-width:5px;
border-style:solid;
width:100%;
`


function App() {
  return (

    
    <AppDiv>
       <HeaderDiv>
          <h1>NASA DAILY</h1>
       </HeaderDiv>
      
       <PhotoList />
       
    </AppDiv>
  );
}





export default App;
