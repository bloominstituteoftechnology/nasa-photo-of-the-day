import React from "react";

const TitleCard = ({title, image}) => {

    return (

      
      <div className="title-card ">
        <h2>{title}</h2>
       <img src={image} alt=""/>
      </div>
    
    );
  };
  export default TitleCard;