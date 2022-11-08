import React, {useState,useEffect} from "react";
import Axios from "axios"
import Vimeo from '@u-wave/react-vimeo'

const apod = "https://api.nasa.gov/planetary/apod?api_key=5KK1Puwl9h9XomQH3Bky6mWLTv3CC7mGKDOsTd1n"

  const NasaImage = () => {
    const [apiObj,setApiObj] = useState()

    useEffect(() => {
      Axios.get(apod).then(res => {
      setApiObj(res.data)
      console.log("hits the then")
      })},[])

    return <div>
      <Vimeo video={apiObj} autoplay/>
    </div>
  }

  export default NasaImage