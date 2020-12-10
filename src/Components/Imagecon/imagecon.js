import React, {useState, useEffect} from "react";
import Details from "../Details/details"

const Imagecon = (props) => {
    const { arr } = props
    console.log('hey', arr)
    return <div>
        <h3>{arr.caption}</h3>
        <img></img>
        <button></button>
    </div>
}

export default Imagecon