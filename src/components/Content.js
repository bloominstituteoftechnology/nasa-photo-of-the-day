import React from 'react';

const Content = (props) => {
    const {info, title, date} = props;

    return (
        <container>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{info}</p>
        </container>
    )
}

export default Content;