import React from "react";
import "./App.css";
import  ApodCard from "./components/ApodCard";
import ApodGrid from "./components/ApodGrid";
import { Button } from 'reactstrap'
import { Spinner } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <p>
      
      <h1>Astronomy Picture of the Day</h1>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="dark" />
      </p>
        <ApodGrid/>
    </div>
  );
}

export default App;


