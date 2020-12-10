import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

const URL = "https://api.nasa.gov/planetary/apod?api_key=j8WWFPzgKjcgpVbQoJsG6bnUGS430xCP2IeCMFiO"


function App() {
  const [photo, setPhoto] = useState();
    
  useEffect(() => {
    const getPic = () => {
    axios.get(`${URL}`)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        console.log('err', err)
      });
    }
    getPic()
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
