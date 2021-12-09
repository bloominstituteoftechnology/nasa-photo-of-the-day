import React from "react";

const Image = props => {
    const { data } = props;
    return (
        <div>
            <img
            alt='astronomy photo of the day'
            src={data.hdurl}
            />
        </div>
    )
}

export default Image;