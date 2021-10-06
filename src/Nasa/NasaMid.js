import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function MidSect(){

const [image, setImage] = useState('')
const [date, setDate] = useState('')
const [copyright, setCopyright] = useState('')


useEffect(()=>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=Ovhvp6unVUwRnlCgwRbzlTdaEDqhQEdFn6o7UikV')
.then(resp => {
  setImage(resp.data.url)

})
.catch(err => {
  console.error(err);
})

},[])



useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=Ovhvp6unVUwRnlCgwRbzlTdaEDqhQEdFn6o7UikV')
  .then(resp => {
    setDate(resp.data.date)
  
  })
  .catch(err => {
    console.error(err);
  })
  
  },[])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Ovhvp6unVUwRnlCgwRbzlTdaEDqhQEdFn6o7UikV')
    .then(resp => {
      setCopyright(resp.data.copyright)
    
    })
    .catch(err => {
      console.error(err);
    })
    
    },[])


return ( 
  <div className="img_container">
<img src={image} alt='Hello'/> 
<p>Today's Date: {date}</p>
<p>{copyright}</p>

      </div>
)
}