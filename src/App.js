import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const[pics, setPics] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=HXdg79f4jls1dnYfc551MBhS1xwFOdVmj6iAntnJ')
    .then(res => {
      setPics(res.data);
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={pics.url} ></img>
    </div>
  );
}

export default App;
