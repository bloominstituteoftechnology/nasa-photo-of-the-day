import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import ImageContainer from "./components/imageContainer";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import "./App.css";



function App() {
  const initialDate = [new Date().getFullYear().toString(), (new Date().getMonth() + 1).toString(), new Date().getDate().toString()]
  if(initialDate[1].length < 2)initialDate[1] = `0${initialDate[1]}`
  //The above is to set the initial date for useState below. The jank is because the API needs specific formatting. 
  //Such as: '2022-05-18' rather than '2022-4-18' which would return error and wrong month.
  const [typeOfImg, setTypeOfImg] = useState('auto');
  const [dataObj, setDataObj] = useState('This will exist soon');
  const [date, setDate] = useState(`${initialDate[0]}-${initialDate[1]}-${initialDate[2]}`);

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
    .then(res=>{
      setDataObj(res.data);
      console.log(dataObj);
    })
    .catch(res=>{'error?'})
  }, [])
  
  return (
    <div className="App">
      <NavBar setTypeOfImg={setTypeOfImg} />
      <ImageContainer hdurl={dataObj.hdurl} />
    </div>
  );
}

export default App;
