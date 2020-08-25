import React, {useState, useEffect} from "react";
import "./App.css";
import Card1 from './components/card'
import axios from "axios";

function App() {
  const [nasaCall, setNasaCall] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=sHSkNdRp3rJDBkhVCFN6rImj5fDs1xYi7C3wedKI&date=2012-03-14`)
      .then(res => {
        setNasaCall(res.data)
        
      }) 
      .catch(err => {console.log(err)})
  }, [])





  return (
    <div className="App">
     
     <h1>Nasa Photo Of The Day</h1>

    <Card1 nasa={nasaCall} />

    </div>
  );
}

export default App;
