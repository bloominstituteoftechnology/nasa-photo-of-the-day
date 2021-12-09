import React from "react";

export default function NasaImage(props) {
  const { nasaImage } = props;
  console.log(nasaImage);

  return (
    <div className="Photo">
      <img src={nasaImage} alt="Comet over the Alps in Italy" />
    </div>
  );
}
