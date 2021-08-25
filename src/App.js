import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./App.css";



function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     .then(response => {
       console.log('RESPONSE', response.data)
       setData(response.data)

     })
      .catch(error => {
       console.log(error)
       debugger
      })

    }, [])

    const Photo = props => (
      <div>
    {props.apiData.explanation}
      </div>
    )



  return (
    <div className="App">
      <p>

      <Photo key={data.date} apiData={data} />

        <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
