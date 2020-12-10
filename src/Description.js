import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function Description(props) {
    const { description, date, copyright, title, url} = props
    const [details, setDetails] = useState(null)
  
   
    
  
    useEffect(() => {
      // this runs after first render for sure and then after every render+domSurgery caused by a change in friendId
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=rCiLxbpacIgUNvc3dJdaZaRgkJ1gYTvcEp8LGSzS`)
        .then(res => {
          setDetails(res.data)
        })
        .catch(err => {
          debugger
        }) 
    }, [url]) // without url, it won't re-fetch and will stay on the first render
  
  
    return (
      <div className='container'>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h2>{copyright}</h2>
        <img alt="spaceimage"src={url}/>
        <h3>{url}</h3>
       <p>
           {description}
       </p>
      </div>
    )
  }