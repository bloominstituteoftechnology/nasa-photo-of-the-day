import React from "react";

const Date = props => {
    const {date} = props;
    console.log(date)

    return (
        <h2>{date}</h2>
    )
}

export default Date;