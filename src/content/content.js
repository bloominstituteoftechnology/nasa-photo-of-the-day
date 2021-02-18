import React from 'react'
const Content = props => {
    const { data } = props;
    console.log(data)
    return (
        <div>
            <p>{data.date}</p>
            <a href = {data.url}>
                <img src = {data.url}></img>
            </a>
            <br></br>
            <b>{data.title}</b>
            <br></br>
            <b>Image Credit & Copyright: {data.copyright}</b>
            <p><b> Explanation: </b>{data.explanation}</p>
        </div>
    );
}
export default Content