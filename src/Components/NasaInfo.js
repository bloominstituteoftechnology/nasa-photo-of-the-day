import React from 'react'
import styles from 'styled-components'
function NasaInfo(props) {
    
    const {explanation, title, date} = props
    
    return (
        <div>
            <div>
            <h3>Date of Picture is {date}</h3>
            <h3>Title Of Picture is {title}</h3>
            <p>{explanation}</p>
            </div>
        </div>
    )
}

export default NasaInfo;