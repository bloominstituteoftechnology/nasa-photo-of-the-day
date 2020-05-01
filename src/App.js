import React from "react";
import "./App.css";
import Search from "./Nasa/Search";
import {Alert} from 'reactstrap';



function App() {

  return (
    <div className="App">
      <div className="top">Welcome to Nasa's Picture of the day</div>
      <p>
        Nasa has chooses a picture every day, as a picture of the day. <br/> Choose bellow the date you would like to see <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div>
        <Search/>
      </div>
    </div>
  );
};



export default App;
