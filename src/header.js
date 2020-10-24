import React from 'react';

function header(props) {
    return (
        <div id="title">
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap" rel="stylesheet"></link>
            <p id="headerTitle">{props.title}</p>
        </div>
    );
}

export default header;