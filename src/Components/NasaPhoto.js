import react from "react";
import axios from "axios";
import "./NasaPhoto.css";

const NasaPhoto = (props) => {
    const { photo } = props;
    return (
        <div className="nasa-photo-wrapper">
            <h3>{photo.title}</h3>
            <p>{photo.date}</p>
            <a href={photo.url} target="blank">
            <img src={props.photo.hdurl}></img>
            </a>
            <p className="explanation">{props.photo.explanation}</p>
            <nav>
                <a href="https://api.nasa.gov/">Nasa API website</a>
            </nav>
        </div>
    );
}

export default NasaPhoto;