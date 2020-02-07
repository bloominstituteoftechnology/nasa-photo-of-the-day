import React, {useState, useEffect} from "react";
import axios from 'axios';

import Navbar from './components/navbar'
import ApodCard from './components/apodCard';

import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`


function MUIApp() {
  const [ data, setData ] = useState([])
  const [ picLimit, setPicLimit ] = useState(6)

  async function fetchData (){
    const date = new Date()
    const currentYear = date.getTime()
    const pics = []
    for (var i = 0; i < picLimit; i++) {
      let randomDay = date.setTime((currentYear - 31556952000) + Math.floor(Math.random() * 31556952000))
      randomDay = date.toISOString().slice(0,10)
      await axios.get(`https://api.nasa.gov/planetary/apod?api_key=spKBP8PFum2CMgJT4yaFGza6lW8uJydNBKyk09jr&date=${randomDay}`)
      .then(res => {
        pics.push(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }
    setData(pics)

  }
  useEffect(fetchData, [])
  
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        {
          data !== []
            ?
          data.map((apod, i) =><ApodCard key={i} url={apod.url} explanation={apod.explanation} /> )
            :
          <p>loading...</p>
        }

      </Container>
    </div>
  );
}

export default MUIApp;
