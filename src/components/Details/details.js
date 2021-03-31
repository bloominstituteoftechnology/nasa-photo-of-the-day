import React from 'react'

const Details = ({ title, date, url }) => {
    return (
        <div>
            <h2>{title}<br></br>{date}</h2>
            <img src= {url} alt= "work in progress" />
        </div>
    );
}

export default Details;