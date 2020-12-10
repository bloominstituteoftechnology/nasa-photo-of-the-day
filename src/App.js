import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Picture from './Components/Picture'



function App() {
  const [data, setData] = useState({})

  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=ShxBJZ63rXQzZ5IOS7srQl87a1axjtvAjv1By8uI')
    .then((res)=> {
      
     console.log(res.data)
     setData(res.data)
})

  },[])

  return (

    <div className="App">
        
        <Picture image={data.url} title={data.title}/>
        <img alt='space' src={data.url}/>
        <h3>{data.url}</h3>
      <p>
       {data.explanation}
      </p>
      <p></p>

      
      
    </div>
  );
}

export default App;
