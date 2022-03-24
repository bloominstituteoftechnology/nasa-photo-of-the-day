import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "./index";
import axios from "axios";
import App from "./App";

export default function Photo() {
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
            setPhoto(res.data.url);
        })
        .catch(err => {
            console.error(err);
        })
    }, [])
    return <img src={photo} />
}