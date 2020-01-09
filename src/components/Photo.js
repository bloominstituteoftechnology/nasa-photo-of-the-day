import React from 'react';

const Photo = (props) => {
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const formattedDate = new Date(data.date).toLocaleDateString("en-US", options);
    // console.log(data);
    console.log("DATE: ", props.date)
    console.log("PROPS: ", props)

    return (
        <div className="card">
            <h3>{props.date}</h3>
            <h2>{props.title}</h2>
            <img src={props.src} alt='someString' />
            <p className="copyright"><span className="bold">Copyright: </span>{props.copyright}</p>
            <p><span className="bold">Explanation: </span>{props.explanation}</p>
        </div>
    );
}

export default Photo;