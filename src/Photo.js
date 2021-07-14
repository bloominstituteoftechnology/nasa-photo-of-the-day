import React from 'react'

export default function Photo({photo}) {
    return photo ? (
        <div className="photo-card">
            <h2>{photo.title}</h2>
            <h3>{photo.date}</h3>
            {photo.url.includes("youtube") ? (
            <embed src={photo.url}></embed>) : <img src={photo.url} />}
            <p>{photo.explanation}</p>
        </div>
    ) : <h3>Loading...</h3>
}
