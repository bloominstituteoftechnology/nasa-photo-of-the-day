import React, {useState, useEffect} from "react";
import "./App.css";
import Video from "./components/nasa.js";
import axios from "axios";


function App() {
  const [nasa, setNasa] = useState([]);

  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7TEedvatBtcZa95WqVIdCySPyv7Fed6GNGxpefyi")//&date=2012-03-14 for img test
    .then((response) => {
      setNasa(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
        <div className="shuttle">
          <h1>NASA</h1>
            <div>
              {console.log(nasa)}
              {<Video date={nasa.date} explanation={nasa.explanation} 
              src={nasa.url} media_type={nasa.media_type} hdurl={nasa.hdurl}/> }
            </div>
        </div>
        
    </div>
  );
}

export default App;
