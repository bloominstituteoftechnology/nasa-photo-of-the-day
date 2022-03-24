import React, { useState, useEffect} from "react";
import Header from './Components/Header.js'
import NasaPhoto from './Components/NasaPhoto'
import Footer from './Components/Footer.js'
import "./App.css";
import axios from "axios";

const dummyData = {
date: "2022-03-23",
explanation: "Massive stars can blow bubbles.  The featured image shows perhaps the most famous of all star-bubbles, NGC 7635, also known simply as The Bubble Nebula. Although it looks delicate, the 7-light-year diameter bubble offers evidence of violent processes at work. Above and left of the Bubble's center is a hot, O-type star, several hundred thousand times more luminous and some 45-times more massive than the Sun. A fierce stellar wind and intense radiation from that star has blasted out the structure of glowing gas against denser material in a surrounding molecular cloud. The intriguing Bubble Nebula and associated cloud complex lie a mere 7,100 light-years away toward the boastful constellation Cassiopeia. This sharp, tantalizing view of the cosmic bubble is a reprocessed composite of previously acquired Hubble Space Telescope image data.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)",
hdurl: "https://apod.nasa.gov/apod/image/2203/Bubble_HubbleOzsarac_1952.jpg",
title: "The Bubble Nebula from Hubble"

}


function App() {
  const [data, setNasaData] = useState();


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      <Header />
      { data && <NasaPhoto photo={data} />}
      <Footer/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
