import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Img = () =>{
const [img, setimg] = useState({})
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=rMWQ6CSoVomGhkdbiHMLjswHe2dYjVER6YM1PZzh') 
       .then(response => {
           console.log(response)
           setimg(response.data)
       })
    },[])
        
      return( 
           <div>
               <img src = {img.url} alt = "" />
               
           </div>
       )
      } 
   

export default Img
