import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import "./index.js"

function App() {
    const [data, setData] = useState([]);

    //  API
    const fetchData = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
        .then(res => {
            console.log(res);
            setData(res.data)
        })
        .catch(err => console.log(err))
    }

    //  Use Effect
    useEffect(fetchData, [])

    //  Nasa Image Component
    function NasaImg(props) {
      return (
        <a href={props.hdurl} target='_blank'>
        <img 
          src={props.url}
          alt={props.title}
        />
        </a>
      )
    }

    //  Nasa Image Explanation Component
    function NasaExp(props) {
      return (
        <p>
          {props.explanation}
        </p>
      )
    }

    //  Nasa HD Link Component
    function NasaHD(props) {
      return (
        <a href={props.hdurl} target='_blank'>View in HD</a>
      )
    }

    //  Nasa Image Info Component
    function NasaImgInfo(props) {
      return (
        <div className='imgInfo'>
          <NasaExp explanation={props.explanation}/>
          <NasaHD hdurl={props.hdurl} />
          <p className='copy'>Copyright &#169;{props.copyright}</p>
        </div>
      )
    }

    //  Final Output
    return (
      
      <div className='App'>
        <h1>NASA's Photo of the Day</h1>
        <NasaImg 
          url={data.url} 
          alt={data.title} 
          hdurl={data.hdurl} 
        />
        <h2>{data.title}</h2>
        <NasaImgInfo 
          copyright={data.copyright} 
          explanation={data.explanation} 
          hdurl={data.hdurl} 
        />
      </div>
    )
}

export default App;
