import React from "react";
import "../index.css";

export function changeDate(){
    if(document.getElementById('inputID').value !== null){
        //console.log(document.getElementById('inputID').value);
        return document.getElementById('inputID').value;
    }else{
        return "";
    }
}

const Card = (props) => {
    return (
        <div className="card">
            <div  className ="header">
                <img className="logo" src="https://www.festisite.com/static/partylogo/img/logos/nasa.png"/>
                <p className="title">NASA's Picture of the Day</p>
                <form action="/App.js" method="GET">
                    <div style={{color:"white", paddingRight:10+"px"}}>Enter date (yyyy-mm-dd):</div>
                    <input type="text" name="date" id="inputID"></input>
                    <input type="submit" value="Submit" onClick={changeDate}></input>
                </form> 
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
                <p>Copyright Lambda School</p>
            </footer>
        </div>
    )
};

export default Card;