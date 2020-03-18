import React, {useState, useEffect} from "react";


import axios from "axios"
import CardContent from "./CardContent"

function Card() {
  const [info, setInfo] = useState([])
  // console.log([info])

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
      .then(response => {
        console.log(response)
        setInfo(response.data)
      })
      .catch(error => {
        console.log("no doggos", error);
      });
  }, []);

  return (
    <div className="App">
      <CardContent key={info.service_version} info ={info} />
    </div>
  );
}

export default Card;
