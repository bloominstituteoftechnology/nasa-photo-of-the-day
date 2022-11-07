import React, {useState,useEffect} from "react";
import Axios from "axios"

const apod = "https://api.nasa.gov/planetary/apod?api_key=5KK1Puwl9h9XomQH3Bky6mWLTv3CC7mGKDOsTd1n"




  const NasaImage = () => {
    const [img,setImage] = useState("No img found")

    useEffect(() => {
    Axios.get(apod).then(res => {
        console.log(res.data.url)
        setImage(res.data.url)
    })},[])
    
    return <div>
        <video width="100%">
            <source src={img} type="video/mp4"/>
        </video>
    </div>
  }

  export default NasaImage