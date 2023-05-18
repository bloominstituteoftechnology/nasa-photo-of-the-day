import react from "react";
import axios from "axios";

const NasaPhoto = (props) => {
    const { photo } = props;
    return (
        <div className="nasa-photo-wrapper">
            {console.log(photo)}
            <h3>{photo.title}</h3>
            <p>{photo.date}</p>
            <a href={photo.url} target="blank">
                <img src={props.photo.hdurl}></img>
            </a>
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    );
}

export default NasaPhoto;