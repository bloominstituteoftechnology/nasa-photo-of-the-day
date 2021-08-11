import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY} from "./constants/index"

import Cards from "./components/Cards"



function App() {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [explanation, setExplanation] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [hdUrl, setHDURL] = useState ('');
  const [copyright, setCopyright] = useState('');

  useEffect(()=>{

  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data);
      console.log(res.data.date);
      setTitle(res.data.title)
      setDate(res.data.date);
      setImageURL(res.data.url)
      setExplanation(res.data.explanation);
      setCopyright(res.data.copyright);
    })
    .catch(err => {
      console.error(err);
      setError("Sorry! An Error Occured")
    })
  },[])
  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <h1>NASA's Astronomy Picture of the Day</h1>
      <Cards title={title} imageURL={imageURL} explanation={explanation} date={date} copyright={copyright}/>
    </div>
  );
}

export default App;
