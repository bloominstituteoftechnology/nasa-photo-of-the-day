import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled, {ThemeProvider} from 'styled-components'
import { APP_KEY } from "./keyData";

// const theme = {
//   primary: 'red';
//   secondary: 'green';
// }

const Button = styled.button`
font-family: sans-serif;
font-size: 1.3rem;
border: none; 
border-radius: 5px;
background-color: crimson;
padding: 2rem;
background: ${props => (props.primary ? 'purple' : 'green')};
color: white;

top: 50%;
margin: 2%;
z-index: 100;
  &:hover {
    background: blue;
  }
`
const HeaderDiv = styled.div`
position: relative;

`

const HeroPhoto = styled.img`
background-size: cover;
height: 400px;
width: 100%;
`
const PhotoArray = styled.img`
display: flex;
width: 20%;

justify-content: space-around;
flex-direction: row;
flex-wrap: nowrap;
border: 5px purple solid;
align-items: center;  

`
const PhotoArrayDiv = styled.div`
display: flex;

justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;
border: 5px red solid;

`

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('');
  const [photoArray, setPhotoArray] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`)
      .then((evt) => {
        console.log(evt)
        setCurrentPhoto(
          evt.data.url
        );
        setCurrentTitle(
          evt.data.title
        );
        
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  useEffect(() => {
    
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=fd7pIwAIYhMizlYW4gNx7MJ5cMza9oi7FDUS47nJ
    `)
    .then((evt) => {
      console.log(evt)
      setPhotoArray(
        evt.data.photos
      );
      
      
    })
    .catch((err) => {
      debugger;
    });
}, []);


  const toggleHide = () => {

  }
   
  return (
    <div className="App">
      <h2>
        Nasa Photo Of The Day
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </h2>
      <HeaderDiv className="Header">
      <HeroPhoto src={currentPhoto} alt="Big Ship"></HeroPhoto>
      <Button onClick={toggleHide}>Travel To Space</Button>
      </HeaderDiv>
      <PhotoArrayDiv>{photoArray.map(photo => {
        return <PhotoArray src={photo.img_src} alt="PhotoArray" key={photo.id}></PhotoArray>
      })}</PhotoArrayDiv>
        
    </div>
  );
  }
  

export default App;
