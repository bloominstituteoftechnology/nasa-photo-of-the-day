import React from 'react';


function ApodCard(props) {
    return (
        <div className='apod-list'>
            <h2>Title: {props.data.title}</h2>
            <h3>Copyright: {props.data.copyright} </h3>
            <p className="date">Date: {props.data.date}</p>
            <div className="explanation">
                <p>
                    Explanation: {props.data.explanation}
                </p>
            </div>
            {/* <img src={props.data.hdurl} alt="space"/> */}
        </div>
    )
}

export default ApodCard;