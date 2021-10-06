import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Copy (){

  const [nasaCopy, setCopy] = useState('')

  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=MPo19VCiNssR3Nye2o3y5GHVZdUSxXcXlCk3ZJbc')
  .then(resp =>{
    
    setCopy(resp.data.explanation)
})
.catch(err =>{
  console.log(err);
})
  },[])

return(
  <div className ='App'>
    <h5>{nasaCopy}</h5>
  </div>
)

}