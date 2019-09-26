import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            const nasa = res.data;
            console.log(nasa);
            setNasa(nasa);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    },[]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
