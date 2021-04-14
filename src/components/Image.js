import React from 'react'

const Image = (props) => {
const { picOfTheDay } = props;

return (
    <div className="pic">
        <img src={picOfTheDay} alt={'pic of the day'}></img>
    </div>
)

}


export default Image