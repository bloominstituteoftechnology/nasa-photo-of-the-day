import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "./index";
import axios from "axios";

export default function Details() {
    const [details, setDetails] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
            console.log(res.data);
            setDetails(res.data.explanation);
        })
        .catch(err => {
            console.err(err);
        })
    }, [])
    return <p>{details}</p>
}