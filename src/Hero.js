import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

export default function Hero(props){
    const {heroImage} = props

return (
    <div className='hero'>
        <img src={heroImage[0].hdurl} alt="test"/>
        <h1>test test test</h1>
        </div>
)
}