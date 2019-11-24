import React from 'react';

const InfoComponent = (props) => {
    //console.log(props);
    return (
        <div className = 'info-section'>
            {/*refactor as h2's*/}
            <div className = 'title'>{props.title}</div>
            <div className = 'date'>{props.date}</div>
            <div className = 'explanation'>{props.explanation}</div>
        </div>
    );
}

export default InfoComponent;