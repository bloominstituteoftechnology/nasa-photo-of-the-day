import React, {useState, useEffect} from 'react'
import Posts from './components/Posts'
import axios from "axios"
import "./App.css"
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {TextArea } from 'semantic-ui-react'
 
function App() {
 const [data, setData] = useState([])
 const [NasaDate, setDate] = useState([])
 const [NasaExplanation, setExplanation] = useState([])

 const fetch = () => {
   axios.get("https://api.nasa.gov/planetary/apod?api_key=0s3J6875aUstguzbJl69eKvyEqKw1AzddA9FeBBp")
   .then(response => {
      setData(response.data)
      setDate(response.NasaDate)
      setExplanation(response.NasaExplanation)
   })
   .catch(error => { console.log("There was an error gathering data")}
   )
  }
  useEffect(fetch, [])

  console.log(data)
  console.log(NasaDate)
  console.log(NasaExplanation)
  return (
    <div className="App">
       <Posts nasaPic={data.url} title={data.title}/>
       <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    
  <Form>
    <TextArea placeholder={data.explanation} style={{ minHeight: 100 }} />
  </Form>
)

    </div>
  )
}

export default App;
