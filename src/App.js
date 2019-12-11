import React, { useState, useEffect} from "react";
import "./App.scss";
import axios from "axios";
import AppCard from './components/AppCard'

// axios
//   .get('https://api.nasa.gov/planetary/apod?api_key=8JITPnChVRiIiMatNQuwh7UtkzqbqRUcR3L6WXlu')
//   .then(response => {
//     console.log(response);
//     setTitle(response.data.title);
//     setDate(response.data.date);
//     setPotD(response.data.url);
//     setDesc(response.data.explanation);
//   })
//   .catch(error => {
//     console.log('The Data was not returned!', error);
//   })


function App() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [PotD, setPotD] = useState();
  const [desc, setDesc] = useState();
    
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=8JITPnChVRiIiMatNQuwh7UtkzqbqRUcR3L6WXlu')
      .then(response => {
        console.log(response);
        setTitle(response.data.title);
        setDate(response.data.date);
        setPotD(response.data.url);
        setDesc(response.data.explanation);
      })
      .catch(error => {
        console.log('The Data was not returned!', error);
      })
  }, [])

  return (
      <div className="App">
        <h1>Photo of the Day!</h1>
        <div>
          <AppCard title={title}
            date={date}
            PotD={PotD}
            desc={desc}/>
        </div>
      </div>
    );
}

export default App;
