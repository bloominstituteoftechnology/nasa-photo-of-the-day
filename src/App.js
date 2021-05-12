import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Post from './components/Posts/Post';
import Header from './components/Header/Header';

function App() {
  const [data, setData] = useState([])
// const [] = useState()
// const [] = useState()


  useEffect(() => {
       axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")       
        .then(res => {
          // console.log(res.data) 
          setData(res.data)
           })
        .catch((err) => {
          debugger
          })
    }, []);


  return (
    <div className="App">
        <Header />
        <Post data={data}/>
    </div>
  );
};


export default App;
