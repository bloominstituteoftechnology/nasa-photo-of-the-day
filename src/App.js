import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import Photoheader from "./components/Photoheader";
import Header from "./components/Header";
import Info from "./components/Info";
import styled from 'styled-components';

const RandomButton = styled.button`
  color: black;
  padding: 15px;
  margin: 10px;
  background: darkgrey;
  border: none;
  font-size: 15px;
  font-family: 'Raleway', sans-serif;

  &:hover{
    background: grey;
  }
`;

function App() {
  const [photoData, setPhotoData] = useState('')
  const [marsData, setMarsData] = useState('')
  const [date, setDate] = useState('')
  const [currentPhoto, setCurrentPhoto] = useState('')
  const [monthlyData, setMonthlyData] = useState([]) 
  const [dropDown, setDropDown] = useState(1)
  const [currentExplain, setCurrentExplain] = useState('')

  
  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(res =>{
      console.log(res.data)
      setPhotoData(res.data)
      setCurrentPhoto(res.data.url)
      setCurrentExplain(res.data.explanation)
      setDate(res.data.date)
    })
    .catch(err =>{
      console.log('error')
      setCurrentPhoto('https://selzimg.s3.amazonaws.com/items/165430/sg3c2l4fhpn/original.jpg')
    })
  }, [])
  useEffect(() => {
    axios.get(`${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
    .then(res =>{
      console.log(res.data)
      setMarsData(res.data)
    })
    .catch(err =>{
      console.log('error')
    })
  }, [])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=fiJ0anE4tukk6Vd1QNH4e0NNjZNWOUAyi0brdVjK&start_date=2020-06-01&hd=true&end_date=${date}`)
    .then(res =>{
      setMonthlyData(res.data)
      })
    .catch(err =>{
      console.log('error')
    })
  }, [])

  const newMars = () => {
    let marsArray = marsData.photos;
    let marsArrayL = marsArray.length;
    let randomPicture = Math.floor(Math.random() * (marsArrayL + 1));
    setCurrentPhoto(marsArray[randomPicture].img_src)
    setCurrentExplain(marsArray[randomPicture].earth_date + ":Mars")
    console.log(currentPhoto)
  }

  function checkDate(data,selectedDate){
    data.forEach(element => {
      console.log(selectedDate)
      if (element.date === selectedDate)
      {
        setCurrentPhoto(element.url)
        setCurrentExplain(element.explanation)
        return element.url
      }
    })}
    function isPhoto(url){
      if (url.includes('youtube'))
      {
        return 'https://apod.nasa.gov/apod/image/2006/demo-2_crewedlaunchIR1100.jpg'
      } else {
        return url
      }
    }
  return (

    <div className="App">
      <Header />
      <Photoheader photoUrl = {isPhoto(currentPhoto)} />
      <Info dateInfo= {photoData.date} explaination={currentExplain} />
     <div className='buttonDiv'> 
      <RandomButton onClick={() => newMars()}> I want more space! </RandomButton>
      <form>
        <select
        onChange={(e)=> setDropDown(e.target.value),(e) => checkDate(monthlyData,e.target.value)}>
          {monthlyData.map((crrV) => {
            return (
              <option key={crrV.date} value={crrV.date}>
                {crrV.date}
                </option>
            )
          })}
        </select>
      </form>
      </div>
    </div>


  );
}

export default App;
