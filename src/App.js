import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';


function App() {
  // const [data,setData] =useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Ld5h15yFKBzDsrJFoXcegi9MuHFrYcag3ViJm3iH")
      .then(res => {
        console.log("Here", res);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="App">
      {/* {data.map(appDate = {
        return (

        )
      })} */}
    </div>
  );
}

export default App;
