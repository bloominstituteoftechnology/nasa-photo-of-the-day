import React, {useEffect, useState} from "react";
import axios from "axios";

const NasaPhoto = function(){
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=XltfE4wJqRjSpFjVP0ZhLgoCNRXc5hAqfmvr4QdH"
      )
      .then((res) => {
        setNasaData(res);
      })
      .catch((err) => {
        console.log("Error", err);
      })
  }, [])

  if (!nasaData) return <h3>Loading...</h3>
  console.log(nasaData);

  return (
    <div>
      <img src={nasaData.data.url} />
      <h1>{nasaData.data.title}</h1>
      <p>{nasaData.data.explanation}</p>
      <h4>&copy; {nasaData.data.copyright}</h4>
    </div>
  )
}

export default NasaPhoto;