import axios from "axios"
import React, {useState, useEffect} from "react";


 function NasaContent(){
    const [content, setContent] = useState([])
    
  

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=zlgvIZAKfTSDnWa4uJ0sVWjCIzXovvagHzkROPh8")
    .then((response) => {
      console.log(response.data)
      setContent(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])
  return (content &&
    <div className="App">
        <div>
      <h1>
        {content.title} <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <h3>{content.date}</h3>
      </div>
      <div><img alt="data" src={content.url}></img></div>
     <div> <p><span> </span>{content.explanation}</p> </div>
    </div>
  );
  }
  export default  NasaContent; 