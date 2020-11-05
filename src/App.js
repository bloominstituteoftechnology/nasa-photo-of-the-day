import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from '../src/constants/index'
import Photocard from "./Photocard";

export default function App() {
  const [image, setImage] = useState('')
  const [caption, setCaption] = useState('')
  const [date, setDate] = useState('')
  //This will grab the data from the API
  useEffect(() => {
    const fetchImage = () => {
      axios.get(`${BASE_URL}api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          setImage(res.data.url)
          setCaption(res.data.explanation)
          setDate(res.data.date)
        })
        .catch(err => {
          debugger
        })
    }
    fetchImage()
  }, [])

}
