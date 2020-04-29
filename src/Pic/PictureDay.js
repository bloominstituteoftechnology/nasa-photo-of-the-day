import React from "react";
//import axios from "axios";


const PictureDay =  (props) =>{
    return (
     <div className="Pic" key = {props} >
       <img src = {props.url} className="nasaImg" />

      </div>
    );
  }
  
  export default PictureDay;