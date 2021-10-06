import React, {useState, useEffect} from "react";
import {BASE_URL, API_KEY} from '../Constants/index'
import axios from 'axios'

function Footer () {

    const [photoURL, setPhotoURL] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}${API_KEY}`)
        .then(resp => {
          setPhotoURL(resp.data.hdurl)
        }) .catch(err => {
          console.log(err)
        })
      }, [])

    return (
        <div>
            <h4>Photo source: <a href={photoURL} target='_blank'>{photoURL}</a></h4>
        </div>

    )
}

export default Footer