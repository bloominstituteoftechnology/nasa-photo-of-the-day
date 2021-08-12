import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY} from "./constants/index"
import styled from "styled-components";

import Cards from "./components/Cards"
import Search from "./components/Search"
import Buttons from "./components/Buttons";

const StyledApp = styled.div `
  h1 {
    margin: 50px;
    color: #0F044C;
    font-size: 3rem;
    font-family: 'Anton';
  }
`




function App() {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [explanation, setExplanation] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [hdUrl, setHDURL] = useState ('');
  const [copyright, setCopyright] = useState('');

  const getRandomDate = () => {
    const year = Math.floor(Math.random()* (2021-1996 +1)+1996);
    const month = Math.floor(Math.random()* 12 +1);
    // January, Marcy, May, July, August, October, and December
    const dayFor31 = Math.floor(Math.random()* (31-1+1)+1);
    // April, June, September, and November
    const dayFor30 = Math.floor(Math.random()* (30-1+1)+1);
    // February 
    const dayFor28 = Math.floor(Math.random()* (28-1+1)+1);
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8) {
      return `${year}-0${month}-${dayFor31}`;
    } else if(month === 10 || month === 12){
      return `${year}-${month}-${dayFor31}`
    }else if (month === 4 || month === 6 || month === 9){
      return `${year}-0${month}-${dayFor30}`;
    } else if(month === 11){
      return `${year}-${month}-${dayFor30}`;
    } else if (month === 2){
      return `${year}-0${month}-${dayFor28}`;
    } 
  }
  

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
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
  },[date])
  return (
    <StyledApp className="App">
      <Search getRandomDate={getRandomDate} setDate={setDate}/>
      {error && <h1>{error}</h1>}
      <h1>Astronomy Picture of the Day</h1>
      <Cards title={title} imageURL={imageURL} explanation={explanation} date={date} copyright={copyright} getRandomDate ={getRandomDate}/>
      <Buttons getRandomDate ={getRandomDate} setDate={setDate}/>
    </StyledApp>
  );
}

export default App;
