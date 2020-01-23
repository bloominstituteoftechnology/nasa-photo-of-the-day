import React from "react";
import "../index.css";


const Card = (props) => {
    return (
        <div className="card">
            <div  className ="header">
            <img className="logo" src="https://www.festisite.com/static/partylogo/img/logos/nasa.png"/>
            <p className="title">NASA's Picture of the Day</p>
            </div>
        
            <img className="styledImg" src={props.hdurl}/>
            <div className = "description">
                <div className = "info">
                    <p>Copyright:</p>
                    <p className = "date">{props.copyright}</p>
                    <p className = "date">{props.date}</p>
                </div>
                <p className = "descP">{props.explanation}</p>
            </div>
            <footer>
                <p>Copyright NASA</p>
            </footer>
        </div>
    )
};

export default Card;