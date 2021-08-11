import React, { useState } from 'react'

function Date(props) {
    const { date } = props

    return (
        <div>
            <p>{date}</p>
        </div>
    )
}


export default Date