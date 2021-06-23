import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card"
import axios from 'axios'
import CardHeader from './components/CardHeader'

function App() {
  const [dataFromNasa, setDataFromNasa] = useState([])
  const [date, setDate] = useState('')

  const changeInput = evt => {
    const { value } = evt.target;
    setDate(value)

  };

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=pC3grw8MXDkdfChK0Tg7jLyqBfd3OKCNTrO0vwIJ&date=${date}`)
      .then(({ data }) => setDataFromNasa(data))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [date])


  return (
    <div className="App">

      {
        date === '' && <h2>Please Select a Date!</h2>
      }

      {
      date !== '' && <Card dataFromNasa={dataFromNasa} title={dataFromNasa.title} description={dataFromNasa.explanation} date={dataFromNasa.date} imageURL={dataFromNasa.url}/>
      }
      
      <input type="date" onChange={changeInput} value={date}></input>

      {
        date !== '' &&           <div className='description-body'>
                                  <p>{dataFromNasa.explanation}</p>
                                 </div>
      }
    </div>
  );
}

export default App;
