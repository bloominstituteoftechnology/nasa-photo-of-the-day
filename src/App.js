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

  const yearRandom = Math.floor(Math.random()*24 + 1996);
  const monthRandom = Math.floor(Math.random()*11 + 1);
  const dayRandom = Math.floor(Math.random()*30 +1);

  const [year, setYear] = useState(yearRandom);
  const [month, setMonth] = useState(monthRandom);
  const [day, setDay] = useState(dayRandom);
  const [date, setDate] = useState('');
  const [pictureUrl,setPictureUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [media,setMedia] = useState('');
  const [isTrue,setIsTrue] = useState(false);


  
  useEffect(() =>{
  const fetchData = () => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=HAnJQwlst6NnzPOlbmWX5uZdqJIGttsdyqBYaKe5&date=${year}-${month}-${day}`)
    .then(res => {
      // console.log(res);
      // console.log(res.data);
      setPictureUrl(res.data.hdurl);
      setVideoUrl(res.data.url);
      setMedia(res.data.media_type)
      setExplanation(res.data.explanation);
      setTitle(res.data.title);
      setDate(res.data.date);
    })
    .catch(err => {
        console.log(`No data for this date!!!!!  ${err}`)
    })
  }
  fetchData()
},[day,month,year,date])


  const myFunction = () => {
    let dayH,monthH,yearH;
    dayH = document.querySelector('#textday').value;
    monthH = document.querySelector('#textmonth').value;
    yearH = document.querySelector('#textyear').value;

   for (let i=1;i<10;i++){
     if (dayH === '0' + i){
       dayH=i;
     };
   }
   for (let i=1;i<10;i++){
    if (monthH === '0' + i){
      monthH=i;
    };
  }

    if (dayH>=1 && dayH<=31 && monthH>=1 && monthH<=12 && yearH<=2021){
        setDay(dayH);
        setMonth(monthH);
        setYear(yearH);
    }
    else{
      console.log('nothing!!!!!!');
    alert(`Error!
    We can't find a picture for this date or this date doesn't exist. Please enter a new date.`)}
    }
    
 

  return (
    <MainTheme>
    <div className="App">
      <Image />
      <TextOnTop title={title} date={date}/>
      <Picture pictureUrl={pictureUrl} videoUrl={videoUrl} media={media}/>
      <MiddleText explanation={explanation} isTrue={isTrue} setIsTrue={setIsTrue}/>
      <Button myFunction={myFunction}/>
    </div>
    </MainTheme>
  );
}

export default App;
