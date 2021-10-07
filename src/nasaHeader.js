import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Title (){

  const [nasaTitle, setTitle] = useState('')

  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=MPo19VCiNssR3Nye2o3y5GHVZdUSxXcXlCk3ZJbc')
  .then(resp =>{
    
    setTitle(resp.data.title)
})
.catch(err =>{
  console.log(err);
})
  },[])

return(
  <div className ='App'>
    <p>{nasaTitle}</p>
  </div>
)

}