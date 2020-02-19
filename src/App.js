import React, {useState, useEffect} from "react";
import Title from "./components/title";
import img from "./components/img";
import Explain from "./components/Explain";
import axios from "axios";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(); 
  }, []);

  const fetch = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=D4OIdTxuBQNfCngsUEVY0h4eAnMQde0clqwVlgc9`)
    .then(response => {
        setData(response.data);
        console.log(response.data, " is response.data")
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
  }
  
  console.log(data);

  return (
    <div className="App">

      <p>{data.date}</p>
      <Title title={data.title}/>
      <img src={data.url}></img>
      <Explain explain={data.explanation}/>

      {/* {data.map(item => {
        console.log(item, " is item in App.js")
        return (<Title title={item.title} />
        ); CANNOT MAP THROUGH
      })} */}

    </div>
  );
}

