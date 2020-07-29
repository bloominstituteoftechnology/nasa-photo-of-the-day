import React from "react";

const PhotoInfo = (props) => {
    const {owner, date, title}=props
    return(
        <div className = "photoinfo">
          <h2>{owner}</h2> <h2>{date}</h2> <h2>{title}</h2>
        </div>);
}

export default PhotoInfo