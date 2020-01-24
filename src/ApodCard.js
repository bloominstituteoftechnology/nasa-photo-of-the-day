import React from 'react';
import { NewApod, NewH2, NewH3, NewDate, NewExplanation } from './styling';




function ApodCard(props) {

var style = {
    backgroundImage: `url(${props.data.hdurl})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };


    return (
      <div style={style}>
         <NewApod className='apod'>
            <NewH2>Title: {props.data.title}</NewH2>
            <NewH3>Copyright: {props.data.copyright} </NewH3>
            <NewDate className="date">Date: {props.data.date}</NewDate>
            <NewExplanation className="explanation">
                <p>
                    Explanation: {props.data.explanation}
                </p>
            </NewExplanation>
         </NewApod>
      </div>
     
    )
}

export default ApodCard;