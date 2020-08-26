import React from 'react'

function NasaCard(props){
    console.log('props:', props)
    return (
    <div>
        <h1>{props.data.title}</h1>
        <p>{props.data.date}</p>
        <p>{props.data.explanation}</p>
        <footer>{props.data.copyright}</footer>
        
        </div>

    )
}

export default NasaCard

// Data is only in App, in order to get it we are using props