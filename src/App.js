import React, { useState, useEffect } from "react";
import axios from "axios";  
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto"

const dummyData = {
date: "2023-05-08",
explanation: "If not perfect, then this spiral galaxy is at least one of the most photogenic. An island universe containing billions of stars and situated about 40 million light-years away toward the constellation of the Dolphinfish (Dorado), NGC 1566 presents a gorgeous face-on view. Classified as a grand design spiral, NGC 1566 shows two prominent and graceful spiral arms that are traced by bright blue star clusters and dark cosmic dust lanes. Numerous Hubble Space Telescope images of NGC 1566 have been taken to study star formation, supernovas, and the spiral's unusually active center. Some of these images, stored online in the Hubble Legacy Archive, were freely downloaded, combined, and digitally processed by an industrious amateur to create the featured image. NGC 1566's flaring center makes the spiral one of the closest and brightest Seyfert galaxies, likely housing a central supermassive black hole wreaking havoc on surrounding stars and gas.   Almost Hyperspace: Random APOD Generator",
hdurl: "https://apod.nasa.gov/apod/image/2305/NGC1566_HubbleOdenthal_1280.jpg",
title: "The Spanish Dancer Spiral Galaxy"
}

function App() {
  const [data, setData] = useState();   
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      setData(res.data);
    }).catch(err => console.error(err))
  }, [])

  
  return (
    <div className="App">
      { data && <NasaPhoto photo={data}></NasaPhoto>}
    </div>
  );
}

/*
date: "2023-05-08",
explanation: "If not perfect, then this spiral galaxy is at least one of the most photogenic. An island universe containing billions of stars and situated about 40 million light-years away toward the constellation of the Dolphinfish (Dorado), NGC 1566 presents a gorgeous face-on view. Classified as a grand design spiral, NGC 1566 shows two prominent and graceful spiral arms that are traced by bright blue star clusters and dark cosmic dust lanes. Numerous Hubble Space Telescope images of NGC 1566 have been taken to study star formation, supernovas, and the spiral's unusually active center. Some of these images, stored online in the Hubble Legacy Archive, were freely downloaded, combined, and digitally processed by an industrious amateur to create the featured image. NGC 1566's flaring center makes the spiral one of the closest and brightest Seyfert galaxies, likely housing a central supermassive black hole wreaking havoc on surrounding stars and gas.   Almost Hyperspace: Random APOD Generator",
hdurl: "https://apod.nasa.gov/apod/image/2305/NGC1566_HubbleOdenthal_1280.jpg",
media_type: "image",
service_version: "v1",
title: "The Spanish Dancer Spiral Galaxy"
*/

export default App;
