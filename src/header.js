const { useState } = require("react");

import React, { useState, useEffect } from 'react'
import {APP_KEY} from './keyData'
import axios from 'axios'

export default function Header({title, img}) {
    return (
        <>
        <div className="container"></div>
        <h2>Title: {title}</h2>
        <img src ={img}/>
        </>
    )
}