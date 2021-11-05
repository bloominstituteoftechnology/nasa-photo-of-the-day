import React, {useState, useEffect} from "react";
import axios from 'axios';

import "./App.css";
import {API_KEY, BASE_URL} from './Constants/index';
import Image from './components/image';


function App() {
  const [data, setData] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();

  
  useEffect(() => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setData(res.data.data);
        console.log(res.data);
        setImage(res.data.url);
        setTitle(res.data.title);
    
        })
        .catch(err => {
          console.log(err)
        })
   
    }, [])

    return (
      <div className="App">
        <p> Picture of the Day</p>
        <Image image={image} setImage={setImage}/>
        
      </div>
    );
  }
  

export default App;

  