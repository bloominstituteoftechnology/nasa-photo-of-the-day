import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import PhotoList from "./components/PhotoList";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res)
        setData(res.data)
      })
    .catch(error => console.log('There is an error: ', error))

  }, [])

  console.log(data)

  return (
    <div>
      <PhotoList copyright={data.copyright}
        title={data.title}
        date={data.date}
        img={data.url}
        explanation={data.explanation} />
    </div>
  );
}

export default App;
