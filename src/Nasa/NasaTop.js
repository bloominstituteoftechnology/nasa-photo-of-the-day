import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function TitleFunc(){

const [title, setTitle] = useState('')


useEffect(()=>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=Ovhvp6unVUwRnlCgwRbzlTdaEDqhQEdFn6o7UikV')
.then(resp => {
  setTitle(resp.data.title)
})
.catch(err => {
  console.error(err);
})

},[])


return (
  <div className="App">
      <h1>{title}</h1>
      </div>
)
}