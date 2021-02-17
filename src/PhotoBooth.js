import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";




export default function PhotoBooth(props) {

  
 const {data} = props

  
   
  

  return (
    <div className="justify-content-lg-center">
      <h4 style={{ marginBottom: "4rem", marginTop: "5rem" }}>{data.title}</h4>
      <img
        className="mx-auto d-block img-fluid w-100"
        src={data.url}
        alt="Nasa"
      ></img>
      <h3
        className="display-5"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {data.date}
      </h3>

      <p>{data.explanation}</p>
      <div className= "d-flex justify-content-around" style={{ marginTop: "2rem"}}>
    
      </div>

     
    </div>
  );
}
