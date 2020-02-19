import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";
import axios from "axios";


function App() {
  const[nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=Zisrlhyr0r8VsdTBtzJC5eMyMH3fQxoxw5fb619e")
      .then(response => {
        setNasaData(response.data);
      })
      .catch(error => {
        console.log("oops", error)
      })
    }, []);

  return (
    <div className="App">
      <Header date={nasaData.date} title={nasaData.title}/>
      <Image imgUrl={nasaData.url}/>
      <Footer data={nasaData}/>
    </div>
  );
}

export default App;
