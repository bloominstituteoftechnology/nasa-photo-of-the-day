import React, {useState, useEffect} from 'react'
import Posts from './components/Posts'
import axios from "axios"
import "./App.css";



function App() {
 const [data, setData] = useState([])

 const fetch = () => {
   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
   .then(response => {
      setData(response.data)
   })
   .catch(error => { console.log("There was an error gathering data")}
   )
  }
  useEffect(fetch, [])

  console.log(data)
  return (
    <div className="App">
       <Posts nasaVid={data.url} title={data.title}/>

    </div>
  )
}

export default App;
