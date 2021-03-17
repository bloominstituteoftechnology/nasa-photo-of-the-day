import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header(props) {
    const { date } = props
    
    return(
        <div className='container'>
            <h1>Astronomy Photo of the Day</h1>
            <div>Date : {date}   </div>
        </div>
    )

}