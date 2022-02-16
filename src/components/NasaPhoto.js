import React from 'react';


const NasaPhoto = (props) => {
    return(
        <div className = 'nasa-wrapper'>
                <h1>NASA Picture of the Day!</h1>
                <iframe width='800' height='400' src={props.photo.url} type={props.photo.media_type}/>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <p>{props.photo.explanation}</p>
        </div>

    )
}

export default NasaPhoto;