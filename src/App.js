import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./components/Navigation";
import Landing from "./components/PhotoContainer";
import Footer from "./components/Footer";



function App() {
  
  const [data, setData] = useState({});
  
  
    
    useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=S6tFwIyLRECAHE7wVc7T25voX8vo6QXuliStmj7s")  
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