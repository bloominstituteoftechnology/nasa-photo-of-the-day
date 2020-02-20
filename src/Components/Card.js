import React from "react";


{/*image uses state*/}
const Card = (props) => {
    return (
        <div key={props.id}>
            <img alt="nasa photo of the day" src={props.url} />
            <div>
            <p>{props.date}</p>
            <p>Date 2002</p>
            <p>{props.title}</p>
            <p>Image Title</p>
            </div>
           <div>
           <p>{props.explanation}</p>
           <p>Bacon ipsum dolor amet drumstick beef ribs doner salami, pig leberkas corned beef tri-tip ham hock boudin meatball. Swine tongue burgdoggen porchetta, alcatra salami venison pastrami short ribs. Beef shankle ham hock kielbasa short loin. Filet mignon shank leberkas ham ham hock prosciutto burgdoggen tongue spare ribs pork loin fatback </p>
           </div>
           
        </div>
    )
}

export default Card;
