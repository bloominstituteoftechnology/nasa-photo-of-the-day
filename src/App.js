import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Styled from 'styled-components'



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
        
        <div className='container'>
        <Title>
        <h1>{data.title}</h1>
        </Title>
        <img src={data.url}/>
        <h3>"{data.url}"</h3>
        <p>{data.explanation}</p>

      </div>
      
    </div>
    
  );
}

const Title = Styled.div`
  color: black;
  &:hover {
    color: red;
`

export default App;
