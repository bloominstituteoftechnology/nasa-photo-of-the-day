import React from 'react';
import './App.css';
import POD from './components/POD';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <POD />
    </div>
  );
}

export default App;
