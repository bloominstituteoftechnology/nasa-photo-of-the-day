import React, {useState, useEffect} from "react";
import "./App.css";
import PageHeader from './components/PageHeader';
import PictureContainer from "./components/PictureContainer";
import axios from 'axios';
import DateTaken from "./components/WhoWhen";
import WhoWhen from "./components/WhoWhen";

// axios.get(https://api.nasa.gov/planetary/apod?QEhbxzq339dxAQWStj8mJvw4cWfVgvugqD3bQjfB);

function App() {
  
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log('this is the response', res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log('this is the error', err);
      })
  } ,[])

  return (
    <div className="App">
      <PageHeader />
      
      <PictureContainer photoData={nasaData} />
      <WhoWhen photoData={nasaData}/>
    </div>
  );
}



export default App;

