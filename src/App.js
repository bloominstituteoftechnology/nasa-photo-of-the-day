import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";

function App() {
  const [data, setData] = useState();
  
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>{
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      {data && <NasaPhoto photo={data}/>}
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

//data
date: "2022-11-16"
explanation: "Spiral galaxy NGC 1097 shines in southern skies, about 45 million light-years away in the heated constellation Fornax. Its blue spiral arms are mottled with pinkish star forming regions in this colorful galaxy portrait. They seem to have wrapped around a small companion galaxy above and right of center, about 40,000 light-years from the spiral's luminous core. That's not NGC 1097's only peculiar feature, though. This very deep exposure hints of faint, mysterious jets, seen to extend well beyond the bluish arms. In fact, four faint jets are ultimately recognized in optical images of NGC 1097. The jets trace an X centered on the galaxy's nucleus, but probably don't originate there. Instead, they could be fossil star streams, trails left over from the capture and disruption of a much smaller galaxy in the large spiral's ancient past. A Seyfert galaxy, NGC 1097's nucleus also harbors a supermassive black hole."
hdurl:"https://apod.nasa.gov/apod/image/2211/NGC-1097-LRGB_Ha-rev-12-2022.jpg"
title: "In the Arms of NGC 1097"