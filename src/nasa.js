import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY} from "./index"
import { Card} from "reactstrap";
import "./App";

export default function Nasa(props) {
    const { close, date } = props;
    const [ nasa, setNasa] = useState(null);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby")
         .then(res => {
             setNasa(res.data);
         }).catch(err => {
             console.error(err);
         })
    }, [date]);

return (
    <div className = "container">
        <Card>
            {nasa && (
                <>
                <h2>{date}</h2>
                <img src = {nasa.url} alt = "The Big Dipper" />
                <h2>{nasa.title}</h2>
                <h3>CopyRights: {nasa.copyright}</h3>
                <p>Description: {nasa.explanation}</p>
                </>
            )}
            <button onClick= {close}>Re-Entry</button>
        </Card>
    </div>
   )
}