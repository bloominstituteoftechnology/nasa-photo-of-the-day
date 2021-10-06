import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Pic (){

  const [nasaPic, setPic] = useState('')

  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=MPo19VCiNssR3Nye2o3y5GHVZdUSxXcXlCk3ZJbc')
  .then(resp =>{
    console.log(resp)
    setPic(resp.data.url)
})
.catch(err =>{
  console.log(err);
})
  },[])

return(
  <div className ='App'>
    <img src={nasaPic} alt='ass hat'/>
  </div>
)

}