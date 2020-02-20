import React from "react";


{/*image uses state*/}
const Card = (props) => {
    return (
        <div key={props.id}>
            <img alt="nasa photo of the day" src={props.url} />
            <div>
            <p>{props.date}</p>
            <p>{props.title}</p>
            </div>
           <div>
           <p>{props.explanation}</p>
           </div>
           
        </div>
    )
}

export default Card;
