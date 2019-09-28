import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./components/title";
import Image from "./components/image";
import "./App.css";

function App() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [expl, setExpl] = useState();
  const [img, setImg] = useState();
  const [copy, setCopy] = useState();

  useEffect(() => {
    axios
      .get (`https://api.nasa.gov/planetary/apod?api_key=JoMmkwyEm9G831bMnNcjEoZjEpqfoSZdmwEmseEu`)
      .then(response => {
        setTitle(response.data.title)
        setDate(response.data.date);
        setExpl(response.data.explanation);
        setImg(response.data.hdurl);
        setCopy(response.data.copyright);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);
  return (
    <div>
      <Title
      title={title}
      date={date}
      explanation={expl}
      />
      <Image
      img={img}
      copy={copy}
      />
    </div>
  );
}

export default App;
