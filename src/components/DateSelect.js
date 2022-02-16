import React, { useState } from "react";

export default function(props){
    return(
        <div className="date-selector">
            {
            <div>
                <a href="/" onClick={(event)=>{event.preventDefault();let tempDate = new Date(props.currentDate); tempDate.setDate(tempDate.getDate()); props.setCurrentDate(tempDate)}}> {'<'} </a>
                <input onChange={(event)=>{let tempDate = new Date(event.target.value); tempDate.setDate(tempDate.getDate() + 1);props.setCurrentDate(tempDate)}} value={props.currentDate} type="date"/>
                <a href={"/"} onClick={(event)=>{event.preventDefault();let tempDate = new Date(props.currentDate); tempDate.setDate(tempDate.getDate()+2); props.setCurrentDate(tempDate)}}> {'>'} </a>
            </div>
            }
            {/*left: go back one day, middle: select specific date, right: go forward one day*/}   
        </div>
    )
}