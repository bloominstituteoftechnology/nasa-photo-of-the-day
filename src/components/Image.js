import React from "react";

const Image = props => {
    const { data } = props;
    return (
        <>
            <img
            alt='astronomy photo of the day'
            src={data.hdurl}
            />
        </>
    )
}

export default Image;