import React from "react";
// import "./App.scss";
import Navigation from "./Components/Nav/Nav";
import PhotoData from './Components/PhotoCard/PhotoData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MarsData from './Components/MarsRover/MarsData'
import Logo from './assets/Logo.png';
import {Button} from 'reactstrap';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
      <Route path='/' exact>
      <div className="rightWrapper">

      {/* eslint-disable-next-line  */}
        <div className="logoNasa" ><img class="mt-4 mb-4 flex-auto h-48 object-center items-center" src={Logo} /><h1 className="headerTitle">Photo of the Day</h1></div>

      <PhotoData />
      </div>
      </Route>
      <Route path='/marsrover' exact>
      <MarsData key={[0]} />
      </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
