import React from 'react';

const Photo = (className, data) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", options);
    return (
        <div className="card">
            <h3>{formattedDate}</h3>
            <a href={data.url}>
                <img className={className} src={data.url} alt={data.title} />
            </a>
            <h2>{data.title}</h2>
            <p className="copyright"><span className="bold">Copyright: </span>{data.copyright}</p>
            <p><span className="bold">Explanation: </span>{data.explanation}</p>
        </div>
    );
}

export default Photo;