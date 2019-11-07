import React from "react";

const ImgCard = (props) =>{


    return (
        <div>
            <img src={props.url} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p>{props.descrip}</p>
        </div>
    );
};

export default ImgCard;