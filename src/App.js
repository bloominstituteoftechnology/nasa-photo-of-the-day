import React, { useState} from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import NasaPhoto from './Compoents/NasaPhoto.js';

// const dummyData = {
//   date: "2021-12-23",
//   explantion: "are you",
//   hdurl: "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
//   title: "Three Plants and a Comet"
// }

function App() {
  const [data, setData] = useState();
  useEffect(() =>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=DqhtV2TqOoniIEE9C4JrN4suWTDtXEf36dLAgpSX ')
.then( res => {
console.log(res)
setData(res.data);
})
.catch(err => 
  console.log(err)
)
  }, [])

  return (
    <div className="App">
      {data && <NasaPhoto photo={data} /> }

    </div>
  );
}

export default App;


// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 
// https://api.nasa.gov/planetary/apod?api_key=DqhtV2TqOoniIEE9C4JrN4suWTDtXEf36dLAgpSX
/// date