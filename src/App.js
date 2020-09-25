import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header"
import Photo from "./components/Photo"
import Footer from "./components/Footer"
import "./App.css";


function App() {
const [data, setData] = useState([])

// const effectFunction = () => {
//   axios
//    .get("https://api.nasa.gov/planetary/apod?api_key=9oDCsjAav9Nn0mJu4d9V8Oym0Ya2KvJEfpDMGiLM")
//   .then((resp) => {
//     setData(resp.data) 
//     console.log(resp.data)
//   })
//   .catch((error) => console.log(error))
// } 
// useEffect(effectFunction, []);


useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-27")
  .then(( response => {
    setData(response.data)
    console.log(response)
  }))
  .catch((error) => console.log(error));
}, [])





  return (
    <div className="App">
      <Header />
      <Photo data = {data}/>
      <Footer />
    </div>
  );
}

export default App;



