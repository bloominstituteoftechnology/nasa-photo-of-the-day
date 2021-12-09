import React from "react";

const Caption = props => {
    const { data } = props;
    // console.log("data", data.date)
    // const dateString = () => {
    //     const splitDate = data.date.split("-");
    //     return splitDate
    // }
    // const dateStr = dateString()
    return (
        <div>
            <p>Date: {data.date}</p>
            <p>{data.explanation}</p>
            <p>copyright: {data.copyright}</p>
        </div>
    )
}

export default Caption;