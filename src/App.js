import React, {useState, useEffect} from "react";
import axios from 'axios';
import Body from './body';
import Header from './header';
import "./App.css";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=tS3bpBO8Kg4eL7WcNoGpBf7eNqMuFMdKxIB48rN1&date=2020-10-20`
      )
      .then((results) => {
        console.log("Results from useEffect of NasaAPI", results);
        setData(results.data)
      })
      .catch((err) => {
        console.log("Error occured in useEffect of NasaAPI: ", err);
      })
     return ()=>{}
  }, []);
  return (
    <div className="postPage">
      {data !== null ?
        <Body url={data.url} explanation={data.explanation} /> : <span></span>
      }
      {data !== null ?
        <Header title={data.title} /> : <span></span>
      }
    </div>
  );
}
export default App;