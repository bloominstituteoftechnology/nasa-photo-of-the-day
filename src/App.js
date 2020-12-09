import React,{useState,useEffect} from "react";
import "./App.css";
import axios from "axios"


function App() {
  const [nasaData, setNasaData]= useState(result)
  const date = 

  useEffect(() => {
    
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=leHoEfK9OcSztrGdehxyUGRHuuLHnFxfKypXslXg&date=2012-03-14`)
        .then((res) => {
          const result = res.data
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    

    ;
  }, []);

 
}

export default App;
