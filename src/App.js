import React from 'react';
import './App.css';


//based Components
import Welcome from '../src/components/Welcome';
import Nav from '../src/components/Nav';

function App() {
  return (
    // inside div put base components also it will be inside of retun.
    <div>
      <Nav />
      <Welcome />
    </div>
  );
}

export default App;
