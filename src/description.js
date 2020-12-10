import React, {useState, useEffect} from "react";

const Desc = (props) => {
    const { apod } = props
    return <div>
        <p>{apod.explanation}</p>
    </div>
}

export default Desc