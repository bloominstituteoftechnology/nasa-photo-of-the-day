import React from 'react';

const dummyData = {
    date: "2022-12-13",
    explanation: "Can the night sky be both art and science? If so, perhaps the featured image is an example. The digital panorama was composed of 10 landscape and 10 sky images all taken on the same night, from the same location, and with the same camera.  Iconic features in the image have been artfully brightened, and the ground nearby was artfully illuminated. Visible in the foreground is the creative photographer anchoring an amazing view from the rugged Lofoten Islands of Norway, two months ago, by holding a lamp. Far in the distance are three prominent arches: our Milky Way Galaxy on the left, while a scientifically-unusual double-arced aurora is documented on the right. A meteor is highlighted between them. Other notable skylights include, left to right, the Andromeda Galaxy, the planet Jupiter, the star Vega, and the stars that compose the Big Dipper asterism.",
    hdurl: "https://apod.nasa.gov/apod/image/2212/SkyArt_Cobianchi_2048.jpg",
    title: "An Artful Sky over Lofoten Islands"
    
  }

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}
export default NasaPhoto;