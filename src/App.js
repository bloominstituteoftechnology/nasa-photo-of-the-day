import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Image from './components/imageOnTop/imageOnTop';
import TextOnTop from './components/topText/toptext';
import Picture from './components/picture/picture';
import MiddleText from './components/middleText/middletext';
import Button from './components/button/button'
import styled from "styled-components";


const MainTheme = styled.div`
background-color:${props => props.theme.primaryColor};
font-family: sans-serif;
color: ${props => props.theme.white};
font-size:large;
`;

function App() {

  const [year, setYear] = useState('2011');
  const [month, setMonth] = useState('11');
  const [day, setDay] = useState('1');
  const [pictureUrl,setPictureUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [media,setMedia] = useState('');
  
  useEffect(() =>{
  const fetchData = () => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=HAnJQwlst6NnzPOlbmWX5uZdqJIGttsdyqBYaKe5&date=${year}-${month}-${day}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      setPictureUrl(res.data.hdurl);
      setVideoUrl(res.data.url);
      setMedia(res.data.media_type)
      setExplanation(res.data.explanation);
      setTitle(res.data.title);
    })
    .catch(err => {
        console.log(`No data for this date!!!!!  ${err}`)
    })
  }
  fetchData()
},[day,month,year])


  const myFunction = () => {
    let dayH,monthH,yearH;
    dayH = document.querySelector('#textday').value;
    monthH = document.querySelector('#textmonth').value;
    yearH = document.querySelector('#textyear').value;
    if (dayH>=1 && dayH<=31 && monthH>=1 && monthH<=12 && yearH<=2021){
        setDay(dayH);
        setMonth(monthH);
        setYear(yearH);
    }
    else(console.log('nothing!!!!!!'))
    }
 

  return (
    <MainTheme>
    <div className="App">
      <Image />
      <TextOnTop title={title}/>
      <Picture pictureUrl={pictureUrl} videoUrl={videoUrl} media={media}/>
      <MiddleText explanation={explanation} />
      <Button myFunction={myFunction}/>
    </div>
    </MainTheme>
  );
}

export default App;
