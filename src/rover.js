import React, {useState, useEffect} from "react";
import axios from 'axios'

function Rover(){
    const[roverPic, setRoverPics] = useState(null)
  
    useEffect(() =>{
      const fetchImage = () =>{
        axios.get('https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY')
        .then(res=>{
          setRoverPics(res.data)
          console.log(res.data)
        })
        .catch(err=>{
  
        })
      }
      fetchImage()
    },[] )
    return(
        <img src = {roverPic.url}/>
    )
}

export default Rover;