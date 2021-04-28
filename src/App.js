import React, {useEffect, useState} from "react";
import {BASE_URL, API_KEY} from './index'
import axios from 'axios'
import Content from './Content'
import "./App.css";

function App() {
const [apod, setApod] = useState([])
const [currentDate, setCurrentDate] = useState(null)

const openContent = date => {
setCurrentDate(date)  
}

const closeContent = () => {
  setCurrentDate(null)
}

useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(({data}) => setApod(data))
  .catch(err => console.log(err))
}, [])

const Apod = props => (
  <div className='apod'>
    {props.content.title}
    <button onClick={() => openContent(props.content.title)}>
      Blast Off!
    </button>
  </div>
)

  return (
    <div className="App">
      <p>
        Ready to embark on an interstellar journey, one day at a time? <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {<Apod key={apod.id} content={apod}/>}
      {
        currentDate && <Content date={currentDate} close={closeContent} />
      }
    </div>
  );
}

export default App;
