import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./components/Title"
import Image from "./components/Image"
import Copyright from "./components/Copyright"
import Date from "./components/Date"
import Explanation from "./components/Explanation"
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <h1>NASA APOD</h1>
      <Title data={data}/>
      <Image data={data}/>
      <Copyright data={data}/>
      <Date data={data}/>
      <Explanation data={data}/>
    </div>
  );
}

export default App; 
