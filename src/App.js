import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Media from './components/media'

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=StiJUP4brMLR5zQuYaPjAtTsqLwJsrwAr7pl7Wgw')
    .then((res)=> {
     setData(res.data)
})

  },[])


  return (
    <div className="App">
      <Media url={data.url} title={data.title}/>
      <p>
       {data.explanation}
      </p>

    </div>
  );
}

export default App;
