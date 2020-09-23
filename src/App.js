import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header"
import Photo from "./components/Photo"
import Footer from "./components/Footer"
import "./App.css";


function App() {
const [data, setData] = useState([])

const effectFunction = () => {
  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=nRK36ubQgVtpSsq660on5sgVM6JRqRwxYaOvGx4E')
  .then((resp) => {
    console.log(resp.data)
    setData(resp.data)
    
  })
  .catch((error) => console.log(error))
} 
useEffect(effectFunction, []);


  return (
    <div className="App">
      <Header />
      <Photo data = {data}/>
      <Footer />
    </div>
  );
}

export default App;


// explanation: title: url:
