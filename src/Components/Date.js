import React from "react";

const DateImg = props => {
    const {date} = props
    return (
        <h3>
            <div className = 'typewriter'>
                {date}
            </div>
            
        </h3>
    )
}

export default DateImg;