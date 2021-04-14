import React from 'react'

export default function Container(props) {
    const {data} = props
    
    if (!data) return <h3>Loading...</h3>;
    return(
        <>
            <a href={data.url}>
            <img src={data.url}></img></a>
            <h4>{data.title}</h4>
            <p><b>Image Credit & Copyright: </b> 
            <a href="https://www.utkrashmishraastrophotography.com/">{data.copyright}</a></p>
            <p><b>Explanation: </b>{data.explanation}</p>
        </>
    )
}