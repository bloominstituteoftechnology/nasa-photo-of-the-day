import React from "react";

const Main = props => {
    const {image, exp} = props;

    return(
        <div className='main'>
            <img src={image} alt={exp}/>
        </div>
    )
}

export default Main