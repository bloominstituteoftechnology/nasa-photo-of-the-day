import Axios from "axios";
import React, {useState,useEffect} from "react";
import "./App.css";
import Article from "./components/Article";
import Calendar from "./components/Calendar"
import NasaImage from "./components/NasaImage";
import WebBackground from "./components/assets/background.jpg"
import TextStyle from "./components/TextStyle";


function App() {

  const defaultApodUrl = "https://api.nasa.gov/planetary/apod?api_key=5KK1Puwl9h9XomQH3Bky6mWLTv3CC7mGKDOsTd1n"
  const [apodUrl, setApodUrl] = useState("https://api.nasa.gov/planetary/apod?api_key=5KK1Puwl9h9XomQH3Bky6mWLTv3CC7mGKDOsTd1n")
  const [apodObj, setApodObj] = useState()

  useEffect(()=> {
    Axios.get(apodUrl).then(res => {
      setApodObj(res.data)
    })
  },[apodUrl])

  return (
    <div  style={{ backgroundImage: `url(${WebBackground})` }} className="App background">
        <TextStyle textType="header">Astronomy Picture of the Day!</TextStyle>
        {apodObj && <NasaImage url={apodObj.url} copyright={apodObj.copyright}/>}
        {apodObj && <Calendar date={apodObj.date} ApodUrl={defaultApodUrl} setApodUrl={setApodUrl}/>}
        {apodObj && <Article title={apodObj.title} content={apodObj.explanation}/>} 
    </div>
  );
}

export default App;
