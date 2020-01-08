import React from "react";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import PhotoData from './Components/PhotoCard/PhotoData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarsData from './Components/MarsRover/MarsData'
import Logo from './assets/Logo.png';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' exact>
      <div className="rightWrapper">

      {/* eslint-disable-next-line  */}
        <div className="logoContainer"><img className="logo"src={Logo} /><h1>Photo of the Day</h1></div>

      <PhotoData />
      </div>
      </Route>
      <Route path='/MarsRover' exact>
      <MarsData />
      </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
