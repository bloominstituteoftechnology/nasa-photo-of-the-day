import React from "react";
import "./App.css";
//I.C.E.
import NavBar from "./components/NavBar";


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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
