import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import "./App.css";

function App() {
  const [typeOfImg, setTypeOfImg] = useState('auto');
  const [dataObj, setDataObj] = useState(null);

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res=>{
        setDataObj(res.data);
        console.log(dataObj);
    })
    .catch(res=>{console.log(res)})
  }, [])
  
  return (
    <div className="App">
      <NavBar setTypeOfImg={setTypeOfImg} />
    </div>
  );
}

export default App;
