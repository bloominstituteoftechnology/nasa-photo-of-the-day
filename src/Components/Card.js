import React, { userState, useEffect } from "react";


{/*image uses state*/}
const Card = (props) => {
    return (
        <div key={props.id}>
            <img alt="nasa photo of the day" src={props.url} />
           <p>{props.date}</p>
          
            <p>{props.title}</p>
           <p>{props.explanation}</p>
        </div>
    )
}

export default Card;

{/*<img />
<div>
    <p>hfhfhf</p>
    <span>date picker</span>
</div> */}