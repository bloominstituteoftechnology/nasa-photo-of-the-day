// import React from "react";
import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './apiIndex'
import axios from "axios";
import Title from  "./components/title"
import Media from "./components/media";
import Date from "./components/date";
import Explnation from "./components/explanation";
function App() {
  const [data, setData] = useState ({})
  useEffect(() => {
    // const getData = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(result => {
        console.log(result)
        setData(result.data)
        
      })
      .catch (err =>{
        console.log(err)
      })
    
    // getData()
  }, [])

  return (
    <div className="App">
      <div className='title'>
      <Title title={data.title} />
      </div>
     <Media url={data.url}/>
     <div className='date'>
      <Date date={data.date}/>
      </div>
      <div className="exp" >
      <Explnation explanation={data.explanation}/>
      </div>
    </div>
  );
}

export default App;
