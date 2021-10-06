import React from 'react'

function Header (props) {

    const { photoDate, photoTitle } = props

    return (
        <div>
            <h1>Photo Title: {photoTitle}</h1>
            <h2>Date: {photoDate}</h2>
        </div>
    )
}

export default Header