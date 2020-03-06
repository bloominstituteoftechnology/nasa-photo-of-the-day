import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation.js";
import Landing from "./Components/PhotoContainer.js";
import Footer from "./Components/Footer.js";


function App() {
  
  const [data, setData] = useState({});
  
  
    
    useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=xewPlFCS2QHq5u6lamfyj5ihikUQpEshFO6cycmJ")  
          .then(res => setData(res.data))
          
      }
        fetchData();
        
    }, []);
  return (
    <div className="App">
      <Navigation />
      <Landing
          data={data}
       />
      <Footer />
    </div>
  );
}

export default App;