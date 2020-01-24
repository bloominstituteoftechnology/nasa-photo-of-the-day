import React,{useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import axios from "axios";
import MainContainer from "./components/MainContainer/MainContainer.js";



function App() {
  const [photoData, setPhotoData] = useState("")
  useEffect(()=> {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=Ee9dNMn1hDshsByF3BRreZyMfgdQJvO9hbsie6lt`)
    .then(response =>{
      console.log (response);
        setPhotoData(response.data) 
    })
  .catch(error =>{
    console.log("Sorry, no picture today", error);
  });
  }, []);
  // console.log (photoData)
  return (

    <div className="App">
      
        <Header />
        <MainContainer explanation={photoData.explanation} title={photoData.title} image={photoData.url} date={photoData.date}/>
      
    </div>
  );
}

export default App;
