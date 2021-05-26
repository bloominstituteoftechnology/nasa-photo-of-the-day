import React from 'react'
import ReactPlayer from 'react-player'

export default function Image(props){
    const {picture} = props

    
        if (picture.media_type === 'video') {
            return (
                <diV>
                <h1> {picture.date} </h1>

                <h2> {picture.title} </h2> 

                <ReactPlayer url={picture.url} alt={picture.title} />

                <h4> {picture.explanation} </h4>
                </diV>
            )

        }

        else { 
            return (
                <div>

                <h1> {picture.date} </h1>

                <h2> {picture.title} </h2>
            
                <img src={picture.url} alt={`${picture.title}`}/>
        
                <h5> {picture.explanation} </h5>
        
                <h3> {picture.copyright} </h3>

                </div>

        
            )

        
       }
    
}