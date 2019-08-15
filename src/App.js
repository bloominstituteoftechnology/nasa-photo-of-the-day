import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";



function App(props) {
  const [pic, setPic] = useState();
  //const [date, setDate] = useState();
  //const [title, setTitle] = useState();

  //axios function
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RlVu0xWKQ2LGh5zKsgeSnpciQJvSxmA4e0OxOBqc')
      .then (response => {
        //console.log(response) 
        const imageNasa = response.data.hdurl;
        //const dateNasa = response.data.date;
        //const titleNasa = response.data.title;
        console.log("Nasa image", imageNasa)
        setPic(imageNasa);
        })
    }, [] )

    //normal JSX part
  return (
    <div className="App">
      <div className="photoOfDay">
        {imageNasa.map(pic => {
          return(
            {pic}
          );
        })}
      </div>
      <p>
        The photo above shows NASA's Photo of the day pulled from their API! Enjoy!
      </p>
    </div>
  );
}

//exporting data
export default App;
