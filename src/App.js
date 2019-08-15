import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Comp from "./comps/comp";




function App(props) {
  const [pic, setPic] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [expla, setExpla] = useState();

  //axios function
  useEffect(() => {
    //console.log("component mounted")
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
    
    
    //console.log("Component rendered");
    //normal JSX part
  return (
    <Comp picture ={pic} title={title} date={date} expla={expla} />
    
    
  );
}

//exporting data-
export default App;


//<img style={{width: 500, height: 500}} src = {pic}></img>