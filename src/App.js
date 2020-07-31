import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [img, setImg] = useState("")
  
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod')
    .then((r) => {
      console.log(r);
      setImg(r.data);
    })
    .catch((err) => {
      console.log(err);
    });
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
