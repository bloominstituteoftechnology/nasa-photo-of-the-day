import React, {useEffect, useState} from "react";
import axios from "axios";
import {Wrapper, Photo, Text} from "./Styles"

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
    <Wrapper>
      <h1>Nasa Photo Of The Day</h1>
      <Photo src={nasaData.data.url} alt={nasaData.data.title} />
      <h2>{nasaData.data.title}</h2>
      <Text>{nasaData.data.explanation}</Text>
      {nasaData.data.copyright ? <h4> &copy; {nasaData.data.copyright}</h4> : <h4>Photographer unknown</h4>}
    </Wrapper>
  )
}

export default NasaPhoto;