import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nasa from "./components/nasa.js";
import axios from "axios";
import "./index.css";
import blackhole from "./content/black-hole.jpg";

function App() {
  const [nasa, setNasa] = useState([]);
  const errorNasa = {
    media_type:"image",
    hdurl:blackhole,
    title:"404 Image not found",
    explanation:"The image you requested is not available please try another date."



  }
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7TEedvatBtcZa95WqVIdCySPyv7Fed6GNGxpefyi&date=1994-07-15")//&date=2012-03-14 for img test
    .then((response) => {
      setNasa(response.data)
    }).catch((error) => {
      setNasa(errorNasa)
      console.log(error)
    })
  }, [])
  return (
    <div className="APP">
      <div className="SHUTTLE">


        {console.log(nasa)}
        {<Nasa date={nasa.date} explanation={nasa.explanation}
          src={nasa.url} media_type={nasa.media_type} hdurl={nasa.hdurl}
          title={nasa.title} />}

      </div>

    </div>
  );
}

export default App;
