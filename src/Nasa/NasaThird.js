import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function DescSect(){

const [description, setDiscription ] = useState('')


useEffect(()=>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=Ovhvp6unVUwRnlCgwRbzlTdaEDqhQEdFn6o7UikV')
.then(resp => {
  setDiscription(resp.data.explanation)
})
.catch(err => {
  console.error(err);
})

},[])


return (
  <div className="App">
      <p>{description}</p>
      </div>
)
}