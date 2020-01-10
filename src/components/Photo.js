import React from 'react';
import { Media } from 'reactstrap';

const Photo = (props) => {
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const formattedDate = new Date(data.date).toLocaleDateString("en-US", options);
    // console.log(data);
    // console.log("DATE: ", props.date)
    // console.log("PROPS: ", props)

    return (
        <Media body>
            <Media heading>{props.date}</Media>
            <Media heading>{props.title}</Media>
            <img src={props.src} alt='someString' />
            <Media><span className='bold'>Copyright: </span><p className='fontSize'>{props.copyright}</p></Media>
            <Media><span className="bold">Explanation: </span>{props.explanation}</Media>
        </Media>
    );
}

export default Photo;