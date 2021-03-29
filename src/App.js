import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import DataMain from './DataMain.js'
import NavBar from './NavBar.js'
import Footer from './Footer'

function App() {
  const [NasaData,setNasaData] =useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=Ld5h15yFKBzDsrJFoXcegi9MuHFrYcag3ViJm3iH")
      .then(res => {
        console.log("Here", res);
        setNasaData(res.data)
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <DataMain data={NasaData} />
      <Footer />
    </div>
  );
          }


export default App;
