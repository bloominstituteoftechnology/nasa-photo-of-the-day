import React from 'react'

const Image = (props) => {
const { picOfTheDay } = props;

return (
    <div className="pic">
        <img src={picOfTheDay}></img>
    </div>
)

}


export default Image