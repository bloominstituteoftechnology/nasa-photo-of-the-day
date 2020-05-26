import React from "react";
import './Card.css';

function Card() {
    return (
        <div className='card-container'>
            <h1>Photo title</h1>
            <div className="card-flex-container">
                <div className="photo-container">
                    <img className='daily-photo' src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/30084393_209560599629477_5273333796324769792_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=36jyRsZYiREAX-OmEe7&oh=fa4851cc742f839c16331fc78a958698&oe=5EF5431A" alt="Daily nasa shot"></img>
                </div>
                <div className="photo-info">
                    <h2>Author Name</h2>
                    <p>a description of the photo</p>
                    <p>date the photo was taken</p>
                </div>
            </div>
           
        </div>
    );
}

export default Card;