import React, {useState} from "react";
import "./App.css";
import Photo from './Photo'
import Date from './Date'
import Gallery from './Gallery'

function App() {
  const [date, setDate] = useState()
  const [] = useState()
  const [] = useState()

  return (
    <div className="App">
      <p>
        <Date />
        <Photo />
        <Gallery />
      </p>
    </div>
  );
}

export default App;
