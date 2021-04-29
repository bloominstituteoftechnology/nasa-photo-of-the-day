import React, { useState, useEffect}from "react";
import axios from 'axios'
import Title from './components/Title'
import Photo from './components/Photo'
import styled from 'styled-components'

function App() {

  const [data, setData] = useState('')

  const Container = styled.div`
    background: #222831;
  `

  const API_KEY_OFFICIAL = 'x9e919Lyd3bMxc7CtcdhrHbfz9E2o5aoUdFaPPHN'

  useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY_OFFICIAL}&date=2012-03-14`)
      .then(({data}) => {
        setData(data)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <Container className="App">
      <Title data={data} />
      <Photo data={data}  />
    </Container>
  );
}

export default App;
