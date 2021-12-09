import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import DayCard from "./DayCard";


function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {axios.get('https://api.nasa.gov/planetary/apod?api_key=OufEJVeNCmiCxEJpsj3H9KLoMxu60GEekMhL7wZo&start_date=2021-12-01&end_date=2021-12-07')
.then(resp => {
  console.log(resp.data);
  setDetails(resp.data);
  })
.catch(err => console.error(err))}, [])



  return (
    <div className="App">
      {details.map(i => {
        return <DayCard data={i} />
      })}
    </div>
  );
}



export default App;
