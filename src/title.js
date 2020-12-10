import React, {useState, useEffect} from "react";

const Title = (props) => {
    const { apod } = props
    return <div>
        <h2>{apod.title}</h2>
    </div>
}

export default Title