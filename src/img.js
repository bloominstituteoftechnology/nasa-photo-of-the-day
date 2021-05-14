import React, { useEffect, useState } from "react";

export default function Img(props) {
  console.log("props", props);
  const { nasaData, currentIndex } = props; ///this is destructuring
  // const [currentData, setCurrentData] = useState(nasaData[15]);
  // const [img, setImg] = useState(currentData.url); //this is just the inital setting of img--can be changed with setImg
  // console.log(img);

  return (
    <div className="imgContainer">
      <img src={nasaData[currentIndex].url} alt="space pics"></img>
    </div>
  );
}
