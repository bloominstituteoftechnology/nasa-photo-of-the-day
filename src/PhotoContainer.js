import React from "react";
import "./PhotoContainer.css";

// ReactDOM.render(<App />, document.getElementById("root"));

export default function PhotoContainer(props) {

  const { data } = props;
  //  const { copyright, date, explanation, hdurl, title, url } = props;
  console.log("Data in photoContainer:", data);

   console.log("Title:", data.title);

   return (
    <div className="photo-container">
      
        <div className="photo">
          <img id="photo-of-the-day" src={data.url} alt="NASA"></img>
        </div>
        
        <div className="photo-info">
          <div>
            <h2>{data.title}</h2>
            <p>By: {data.copyright}</p>
            <p>Date: {data.date}</p>
            <p>{data.explanation}</p>
            {/* <p><button onClick={() => changeStatus(friend.id)}>change status</button></p> */}
          </div>
        </div>
    </div> 
   
  );

}