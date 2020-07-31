import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from './Card';

import "./App.css";

function App() {
  const [img, setImg] = useState("")
  
  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OPfamgCyYwhJvre3PNrqYoTF4OdMQEPSYJ2XNNTg&date=2020-06-23')
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
      <Card
        key={img.id}
        title={img.title}
        date={img.date}
        explanation={img.explanation}
        copyright={img.copyright}
        imgUrl={img.url}
      />
    </div>
  );
}

export default App;
