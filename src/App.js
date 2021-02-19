import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaCard from './NasaCard';

function App() {

  let today = new Date();
  let mm = String(today.getMonth()+1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

const [spaceData, setSpaceData] = useState({});
const [date, setDate] = useState(today);

useEffect(() => {
axios.get(`https://api.nasa.gov/planetary/apod?api_key=xW8tvx9T1fPT8yv72RGWnhqRzsemcqTAymQonuGb&date=${date}`)
.then(res => {
  setSpaceData(res.data)
})
.catch(err => console.log(err));
},[date]);

const handleChange = e => {
  setDate(e.target.value);
};

  return (
    <div className="App">
      <form>
          <input
          type='date'
          name='date'
          value={date}
          onChange={handleChange}
          />
      </form>
      <NasaCard spaceData={spaceData} />
    </div>
  );
}

export default App;
