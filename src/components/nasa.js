import React from "react";

function Nasa(props) {
  return (
    <>
      <div className="card NASA">
        {props.media_type === "video" ? (
          //is media type a video?
          //if so,

          <iframe
            className="card-img-top"
            width="420"
            height="315"
            src={props.hdurl}
            title="temp"
          />
        ) : (
          //use image,
          // if not,
          //use video
          <img
            className="card-img-top"
            src={props.src}
            width="420"
            height="400"
            alt="Nasa Photo Of The Day"
          />
        )}

        <h3 className="card-title TITLE">{props.title}</h3>
        <p className="DATE">{props.date}</p>
        <p className="EXPLANATION card-desc">{props.explanation}</p>
      </div>
    </>
  );
}

export default Nasa;
