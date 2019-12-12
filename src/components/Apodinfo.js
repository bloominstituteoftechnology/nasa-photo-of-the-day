import React from "react";
import "../App.css";

function Apodinfo(props) {
    console.log(props);
    return (
        <section>
            <div className='bigDiv'>
                <img className='image' src={props.apod}/>
                <h2 className='title'>{props.title}</h2>
                <p>{props.info}</p>
                <p className='date'> {props.date} </p>
            </div>
        </section>
    )
}

export default Apodinfo;