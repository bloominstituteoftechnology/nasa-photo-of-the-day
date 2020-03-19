import React from "react";

const PhotoCard = (props) => {
    return (
        <div className="photo-list" style={{  
            backgroundImage: "url(" + props.url + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
          }}>
            <p style={{
                color: 'white'
            }}>{props.explanation}</p>
            <p style={{
                color: 'white'
            }}>Date Taken: {props.date}</p>
        </div>
    )
}

export default PhotoCard;