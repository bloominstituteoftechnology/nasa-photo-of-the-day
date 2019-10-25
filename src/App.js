import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TitleCard from "./Components/TitleCard";
import MidCard from "./Components/MidCard";
import BottomCard from "./Components/BottomCard";
import styled from 'styled-components'; 

function App() {
  const [title, setTitle] = useState([]);
  const [url, setUrl] = useState([]);
  const [date, setDate] = useState([]);
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=fBxx2I7GHNUgoyNKZoz4n4jGbZcoK0jjdQ9R21LG`
      )
      .then(response => {
        console.log("title data", response.data);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setDate(response.data.date);
        setExplanation(response.data.explanation);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  //  console.log(data);

  return (
    <div className="container">

      <TitleCard title={title} image={url} />

      <div className="App">
        <div> 
        <MidCard date={date} />
        <BottomCard explanation={explanation} />
      </div>         
        
      </div>
    </div>
  );
}
// {/* <p>
//   Read through the instructions in the README.md file to build your NASA
//   app! Have fun 🚀!
// </p> */}
//       <p>test1</p>
//       <CreatePhoto obj={data}/>
//     </div>
//   );
// }

//  return (
//    <div className = "App">
//      <h1>Nasa Image of the Day</h1>
//     <ImgCard />
//      </div>

//  );

export default App;
