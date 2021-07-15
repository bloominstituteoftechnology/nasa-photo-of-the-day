// import React from "react";
import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './apiIndex'
import axios from "axios";
//importing components
import Title from  "./components/title"
import Media from "./components/media";
import Date from "./components/date";
import Explnation from "./components/explanation";

function App() {
  const [data, setData] = useState ([])
  
  useEffect(() => {
      axios.get(`${BASE_URL}${API_KEY}`)
      .then(result => {
        console.log(result)
        setData(result.data)
        console.log(result.data)
        
      })
      .catch (err =>{
        console.log(err)
      })
    

  }, [])

  return (
    <div className="App">
      
      <Title title={data.title} />
    
     <Media url={data.url} picurl={data.media_type}/>
     
      <Date date={data.date}/>
    
      
      <Explnation explanation={data.explanation}/>
      
    </div>
  );
}

export default App;
