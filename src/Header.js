import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

export default function Header(props){
    const {nasaData} = props


return (
    <div className='container'>
        {nasaData.map((obj, index) => {
            return (
                <div key={index}>
            <h1>NASA photo of the day {obj.date}</h1>
            <img src={obj.hdurl} alt="test"/>
            </div>
            )
        })}
        </div>
)
}