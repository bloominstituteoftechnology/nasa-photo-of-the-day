import React from "react";


function Comp(props) {
      
      //console.log("Component rendered");
      //normal JSX part
    return (
      <div className="App">
        <div className="photoOfDay">
          <img src = {props.picture}></img>
        </div>
        <p>
          {props.title} || {props.date}
        </p>
        <p>{props.expla}</p>
      </div>
      
    );
  }
  
  //exporting data-
  export default Comp;