import React from 'react'
import InnerCard from "../innerCard/InnerCard";
import './styles.css'

const ImageWrapper = ({ data }) => {
    const { url } = data
    return (
        <a href={url} className="card" style={{ backgroundImage: `url(${url})` }} target="_blank" rel="noreferrer noopener">
            <InnerCard data={data}/>
      </a>
    )
}

export default ImageWrapper