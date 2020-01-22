import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Body from "./components/Body"
import Header from "./components/Header"


function App() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=zelgbOsOymjncn5lEhlb1LdeklCvlrBL1oG9UMpo")
    .then(response =>{
      console.log(response.data);
      setData(response.data);
    })
    .catch(error =>{
      console.log("The data was not returned", error);
    } )
  },[])
  return (
    <div className="App">
      <Header theDate={data}/>
      
      <Body picture={data}/>
    </div>
  );
}

export default App;
