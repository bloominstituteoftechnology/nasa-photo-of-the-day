import React, {useEffect, useState} from "react";
import "../App.css";
import Title from './Title'
import Photo from './Photo'
import Explanation from './Explanation'
import axios from 'axios'

function App() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState('')
  const [copyright, setCopyright] = useState('')
  const [explanation, setExplanation] = useState('')
 
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=d3tlUqH6cnLcnkFV80WFFgFzSycHd4IlbiI4X5ZZ')
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <p>
        <Title title={title} date={date} />
        <Photo photo={photo} copyright={copyright}/>
        <Explanation explanation={explanation} />
      </p>
    </div>
  );
}

export default App;
