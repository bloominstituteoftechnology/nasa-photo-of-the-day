import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from './Components/header'
import Image from './Components/image'
import Footer from './Components/footer'

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState('');
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setDate(res.data.date)
      })
      .catch(err => {
        console.log(err);
      })
  }, []) 
// Display a loading message while the data is fetching
if (!data) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched

  return (
    <div className="App">
     
      <Header  date={date} />
      <Image data={data} />
      <Footer data={data} />
      
    
    </div>
  );
}

export default App;
