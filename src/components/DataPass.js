import React, {useState, useEffect} from "react";
import axios from "axios";



export default function DataPass(props) {
    const [nasaImg, setImg] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=LNPoBywgSDLGE27u4IKuzb2ocXxz3peGPbtVxz44')
          console.log(nasaData);
          setImg(nasaData.data);
        }
        catch (err) {
          console.log(err);
        }
      }
      fetchData()
    }, [])

    return (
      <div className="App">
        <DataPass title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date} /> 
      </div>
    );
}