import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/Photo";
// import Title from "./components/Title";
import Title from "./components/Title";
import Information from "./components/Information";

function App() {
  const [photoOfTheDay, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then((resp) => {
          console.log(resp);
          setPhoto(resp.data);
        })
        .catch((err) => {
          setPhoto(err);
        });
    };

    fetchPhoto();
  }, []);

  return (
    <div className="container">
      {/* <Title photo={photoOfTheDay} /> */}
      <Title photo={photoOfTheDay} />
      <Information photo={photoOfTheDay} />
      <Photo photo={photoOfTheDay} />
    </div>
  );

  //   return (
  //     <div className="App">
  //       <p>
  //         Read through the instructions in the README.md file to build your NASA
  //         app! Have fun <span role="img" aria-label='go!'>🚀</span>!
  //       </p>
  //     </div>
  //   );
}

export default App;
