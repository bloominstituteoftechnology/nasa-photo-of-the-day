import React, {useState, useEffect} from "react";
import axios from 'axios'
import { BASE_URL } from './constants/index'
import "./App.css";
import ReactPlayer from "react-player";
import Title from './components/Title'
import Date from './components/Date'
import Media from './components/Media'
import Paragraph from './components/Paragraph'
import styled from 'styled-components'

const Page = styled.div`
  background-image: url('https://cdn.pixabay.com/photo/2017/03/09/09/28/stars-2129014_1280.jpg');
  color: white;
  margin-top:0;

  h1{
    border: 1px solid purple;
    border-radius: 25px;
    margin: 1% 25%;

}
`

function App() {
  
  const [information, setInformation] = useState([])
  const [url, setUrl] = useState("")

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ASmf086iX6gKngleyHkq56PJfQlYytcaXXf3YTAK`)
      .then(res => {
      console.log(res.data)
      setInformation(res.data)
      setUrl(res.data.url)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  
  return (
    <Page className="App">
      <h1>Nasa Photo of the Day 🚀</h1>
      <Date date={information.date}/>
      {url.includes('youtube')?<Media url={information.url}/>:<img src={information.url} alt="space"/>}
      <Title title={information.title}/>
      <Paragraph explanation={information.explanation}/>
    </Page>
  );
}

export default App;
