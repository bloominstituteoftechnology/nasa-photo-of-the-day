import React from "react";
import "./App.css";
import HeaderComponent from './components/HeaderComponent'
import Details from './components/Details'
import RoverPhotoComponent from './components/RoverPhotoComponent'
import {Button} from 'reactstrap'

function App() {
  
  return (
    <div className="App">
     <HeaderComponent />
     <Details />
     <RoverPhotoComponent />
    </div>
  );
}

export default App;
