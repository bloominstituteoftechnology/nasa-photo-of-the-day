import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Head from './header'
import Body from './Body'
function App() {
  const [data, setData] = useState()
  const [photo, setPhoto] = useState()
  const [title, setTitle] = useState()
  const [info, setinfo] = useState()
  const [date, setDate] = useState()

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=0lQZN0sMkX9wCBGNOGlOyWPpNPQi0jkkN3y6vxgR')
      .then(yo => {
        setDate(yo.data.date);
        setPhoto(yo.data.url); setTitle(yo.data.title);
        setinfo(yo.data.explanation);

        console.log('yo', yo.data)
      })
  }, [])
  // setDate(data.date);
  // setPhoto(data.hdurl); setTitle(data.title);
  // setinfo(data.explanation);
  return (
    <div className="App">
      <Head title={title} date={date} />
      <Body photo={photo}
        info={info} />
    </div>
  );
}

export default App;
