import React from "react";

const Apod = props => {
   {if( props.media_type === "image"){
return (
    <div className = "Apod" key={props.date}>
        <p> Date: {props.date}</p>
      <h2>Picture of the Day: {props.title}</h2>
    <img src = {props.url} alt = "Apod" width = "60%"></img>
      <p>{props.explanation}</p>
    </div>
  );
}
else{
return (
  <div className = "Apod" key={props.date}>
  <p className = "breathingRoom"> Date: {props.date}</p>
<h2>Picture of the Day: {props.title}</h2>
<iframe width = "60%" height = "400rem"
  src = {props.url} />
<p className = "breathingRoom">{props.explanation}</p>
</div>

)}
}};
export default Apod;
