import React from 'react'

const Photo = ({ title, date, url, explanation, copyright }) => {
    return (
        <div className='photoDiv'>
            <h2>{title}<br></br>{date}</h2>
            <img src={url} alt='NASA Photo of the Day' />
            <p>Description:<br></br>{explanation}</p>
            <p>Copyright:<br></br>{copyright}</p>
        </div>
    );
}
export default Photo