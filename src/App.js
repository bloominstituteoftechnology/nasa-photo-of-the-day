import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/body-components/Body";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res =>{
        setNasa(res.data);
      })
      .catch(error =>{
        console.log("No data returned", error);
      });
  },[]);

  console.log("state data: ", nasa);


  return (
    <div className="App">
      <Header date={nasa.date}/>
      <Body picture={nasa.hdurl} description={nasa.explanation}/> 
      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;
