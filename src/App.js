import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import "./App.css";

function App() {
  const [typeOfImg, setTypeOfImg] = useState('auto');
  
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res=>{
      console.log(res);
    })
    .catch(
      console.log('Something went wrong grabbing the API')
      )

  return (
    <div className="App">
      <NavBar setTypeOfImg={setTypeOfImg} />
    </div>
  );
}

export default App;
