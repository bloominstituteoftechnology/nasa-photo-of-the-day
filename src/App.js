import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import TextOnTop from './components/topText/toptext';
import Picture from './components/picture/picture';
import MiddleText from './components/middleText/middletext';
import Button from './components/button/button'

function App() {

  const [year, setYear] = useState('2021');
  const [month, setMonth] = useState('01');
  const [day, setDay] = useState('01');
  const [pictureUrl,setPictureUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  
  useEffect(() =>{
  const fetchData = () => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      setPictureUrl(res.data.hdurl);
      setExplanation(res.data.explanation);
      setTitle(res.data.title);
    })
    .catch(err => {
        console.log(err)
    })
  }
  fetchData()
},[day,month,year])


  // useEffect(()=>{
  const myFunction = () => {
    let dayH,monthH,yearH;
    dayH = document.querySelector('#textday').value;
    monthH = document.querySelector('#textmonth').value;
    yearH = document.querySelector('#textyear').value;
    if (dayH>=1 && dayH<=31 && monthH>=1 && monthH<=12 && yearH>=2015 &&yearH<=2030){
        setDay(dayH);
        setMonth(monthH);
        setYear(yearH);
    }
    else(console.log('nothing!!!!!!'))
    }
    // return myFunction
  // },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <TextOnTop title={title}/>
      <Picture pictureUrl={pictureUrl} />
      <MiddleText explanation={explanation} />
      <Button myFunction={myFunction}/>
    </div>
  );
}

export default App;
