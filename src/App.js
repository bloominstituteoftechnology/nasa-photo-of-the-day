import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import MainContent from "./MainContent/MainContent";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const [apod, setApod] = useState("#");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=JOTxZnLfwtMrWqVs2vDcvVBgY08pWZ29fYgsR8Vb')
    .then(res => {
        const { data } = res;
        console.log(data);
        setApod(data.url);
        setDesc(data.explanation);
        setTitle(data.title);
        setDate(data.date);
    })
    .catch(error => console.log('uh oh', error))
}, [])
  return (
    <div className="App">
      <Header date={date}/>
      <MainContent apod={apod} desc={desc} title={title}/>
      <Footer/>
    </div>
  );
}

export default App;