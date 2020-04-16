import React from "react";
import "./App.css";
//I.C.E.
import NavBar from "./components/NavBar";
import Apod from "./components/Apod";

// import Cards from "./components/conainter/Cards"
// import WeatherOnMars from "./components/WeatherOnMars";


//NavBar Items array
const items = [
  { name: 'home', label: 'Home' },
 
  {
    name: 'settings',
    label: 'Settings',
    items: [{ name: 'profile', label: 'Profile' }],
  },
]

function App() {
  return (
    <div className="App">
      <div>
      <NavBar items={items} />
      </div>
      {/* <Cards /> */}
      <div>
        <Apod />
      </div>
    <div>
      {/* <WeatherOnMars /> */}
    </div>
    </div>
  );
}

export default App;
