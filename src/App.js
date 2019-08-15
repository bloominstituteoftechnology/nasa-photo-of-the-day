import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";



function App(props) {
  const [pic, setPic] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [expla, setExpla] = useState();

  //axios function
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RlVu0xWKQ2LGh5zKsgeSnpciQJvSxmA4e0OxOBqc')
      .then (response => {
        //console.log(response) 
        const imageNasa = response.data.hdurl;
        console.log("Nasa image", imageNasa)
        setPic(imageNasa);

        const dateNasa = response.data.date;
        console.log('Nasa date: ',dateNasa )
        setDate(dateNasa)

        const titleNasa = response.data.title;
        console.log('Nasa title: ',titleNasa )
        setTitle(titleNasa)

        const explanationNasa = response.data.explanation;
        console.log('Nasa explanation: ',explanationNasa )
        setExpla(explanationNasa);

        })
    }, [] )

    //normal JSX part
  return (
    <div className="App">
      <div className="photoOfDay">
        <img style={{width: 800, height: 800}} 
        src = {pic}></img>
      </div>
      <p>
        {title} || {date}
      </p>
      <p>{expla}</p>
    </div>
  );
}

//exporting data-
export default App;
