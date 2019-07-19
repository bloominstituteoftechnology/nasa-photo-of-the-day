import React from 'react'
import './Posts.css'


export default function Posts(props) {

    return (
        <div className='Posting'>
            <h1> {props.title} </h1>
            <h5>{props.date}</h5>
          <img className= "picture"  src = {props.nasaVid} alt= "Red Moon" /> 
            <p> {props.paragraph} </p>
            <h5 >{'Watch the Video below for more informatin'}</h5>
            <iframe title='Nasa Video' width="495" height="385" src="https://www.youtube.com/embed/xc1SzgGhMKc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
        </div>
    )
}