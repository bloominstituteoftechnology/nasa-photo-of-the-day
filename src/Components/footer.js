import React, {useState, useEffect} from "react";
import {BASE_URL, API_KEY} from '../Constants/index'
import axios from 'axios'

function Footer (props) {

    const { photoURL } = props

    return (
        <div>
            <h4>Photo source: <a href={photoURL} target='_blank'>{photoURL}</a></h4>
        </div>

    )
}

export default Footer