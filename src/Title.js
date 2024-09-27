import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "./index";
import axios from "axios";

export default function Title() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
            setTitle(res.data.title);
        })
        .catch(err => {console.error(err)});
    }, [])

    return <h3>{title}</h3>
}