import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card"
import axios from 'axios'
import CardHeader from './components/CardHeader'
import styled from 'styled-components'

const CardDescriptionWrapper = styled.div`
  color: black;
  background-color: grey;
  border: 5px solid black;
  border-radius: 8px;
  margin: 20px;
`;

const DateInput = styled.input`
  background-color: grey;
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  margin: 20px;
`

const PleaseH2 = styled.h2`
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  margin: 20px;
  background-color: grey;
  width: 20%;
`

const AppStyling = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

let dateSelected = false

function App() {
  const [dataFromNasa, setDataFromNasa] = useState([])
  const [date, setDate] = useState('')

  const changeInput = evt => {
    const { value } = evt.target;
    setDate(value)
    document.body.style = 'background: grey'
  };

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=pC3grw8MXDkdfChK0Tg7jLyqBfd3OKCNTrO0vwIJ&date=${date}`)
      .then(({ data }) => setDataFromNasa(data))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [date])

  useEffect(() => {
    if (dateSelected == false) {
      document.body.style = 'background: black'
    } 
    else if (dateSelected == true) {
      document.body.style = 'background: grey'
    }
  }, [])




  return (
    <AppStyling className="App">

      {
        date === '' && <PleaseH2>Please Select a Date!</PleaseH2>
      }

      {
      date !== '' && <Card dataFromNasa={dataFromNasa} title={dataFromNasa.title} description={dataFromNasa.explanation} date={dataFromNasa.date} imageURL={dataFromNasa.url}/>
      }
      
      <DateInput type="date" onChange={changeInput} value={date}></DateInput>

      {
        date !== '' &&           <CardDescriptionWrapper className='description-body'>
                                  <p>{dataFromNasa.explanation}</p>
                                 </CardDescriptionWrapper>
      }
    </AppStyling>
  );
}

export default App;
