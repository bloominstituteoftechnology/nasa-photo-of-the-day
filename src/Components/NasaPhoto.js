import React from "react";

const dummyData = {
    date: "2023-02-18",
    explanation: "A mere 56 million light-years distant toward the southern constellation Fornax, NGC 1365 is an enormous barred spiral galaxy about 200,000 light-years in diameter. That's twice the size of our own barred spiral Milky Way. This sharp image from the James Webb Space Telescope's Mid-Infrared Instrument (MIRI) reveals stunning details of this magnificent spiral in infrared light. Webb's field of view stretches about 60,000 light-years across NGC 1365, exploring the galaxy's core and bright newborn star clusters. The intricate network of dusty filaments and bubbles is created by young stars along spiral arms winding from the galaxy's central bar. Astronomers suspect the gravity field of NGC 1365's bar plays a crucial role in the galaxy's evolution, funneling gas and dust into a star-forming maelstrom and ultimately feeding material into the active galaxy's central, supermassive black hole.",
    hdurl: "https://apod.nasa.gov/apod/image/2302/JWSTMIRI_ngc1365.png",
    title: "Barred Spiral Galaxy NGC 1365 from Webb"
  }

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
        <h3>{props.photo.title}</h3>
        <p>{props.photo.date}</p>
        <img src={props.photo.hdurl} />
        <p>{props.photo.explanation}</p>
    </div>
    )
    
}
export default NasaPhoto;