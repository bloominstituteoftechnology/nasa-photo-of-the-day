import React from 'react'
import Picture from './Picture'
import Body from './Body'


const Card = (props) => {
    if (!props.nasaData) {
        return <h3>Loading...</h3>;
    } 
       const {title, explanation, date}=props.nasaData
       return (
           <div>
               <Picture pictureOfTheDay={'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'}/>
               <Body title={title} explanation={explanation} date={date}/>
           </div>
       ) 
}

export default Card