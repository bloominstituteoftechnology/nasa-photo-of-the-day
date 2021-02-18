import React from "react";
import { useState } from "react";

const Center = (props) => {
  const { data, isVideo } = props;
  const [showDesc, setshowDesc] = useState(false);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  return (
    <div className="main-photo-cont" style={style}>
      <h2 style={{ fontSize: "18px" }}>{data.title}</h2>
      {isVideo ? (
        <iframe
          src="https://www.w3schools.com"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      ) : (
        <img className="main-img" src={data.url} alt="NASA of the day" />
      )}
      {!showDesc && (
        <button style={{ margin: "2%" }} onClick={() => setshowDesc(!showDesc)}>
          Description
        </button>
      )}
      {showDesc && <div> {data.explanation} </div>}
    </div>
  );
};

export default Center;
