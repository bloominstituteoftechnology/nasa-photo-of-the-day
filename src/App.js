import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Head';
import Body from './Body';
import axios from "axios";


function App() {
  const [apod, setApod] = useState();
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState([]);
  const [expl, setExpl] = useState ([]);
  const [title, setTitle] = useState ([]);
  const [url, setUrl] = useState ([]);


  useEffect(() => {
    axios.get (`https://api.nasa.gov/planetary/apod?api_key=qB9nmHMUHqVtE07BKXKcnscg9XPTOFoxy0Birzgb&date=2021-06-22`)
    .then(res => {
      console.log('it worked!!!!', res)
      setTitle(res.data.title)
      setPhoto(res.data.url)
      setExpl(res.data.expl)
      setDate(res.data.date)
      setUrl(res.data.url)
    })
    .catch(err => console.log('error'))
  },[])

  return (
    <div className ="nasa-blog">
      <Header title = {title} date = {date} />
      <Body photo = {photo} info = {expl} />
    </div>
  );
}


export default App;
