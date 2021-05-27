import React, { useState, useEffect } from 'react';
import "../App.css";



// Child
function Info(props){

const apodData = props;
    return (
        <>
            <div>{props.apodData}</div>
        </>
    )
}


export default Info;