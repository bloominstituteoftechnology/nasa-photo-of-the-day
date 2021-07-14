import React from "react";

function Video(props) {
  const { title, explanation, date , url } = props.data;

  if (!url) return <h3> Loading... </h3>;
  return (
    <div style={{ display:'flex', width: "100%", padding: '2vh 2vw' }}>
     <div style={{width: '50%', padding:'25px'}}>
      <iframe
        className="responsive-video"
        title="Video of the Day"
        src={url}
      ></iframe>
      </div>   

    <div style={{width: '50%', padding:'25px'}}>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </div>
    </div>
  );
}

export default Video;
