import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function Photo (props) {

    const { photoDescription, photoURL} = props

    return (
        <div className="App">
            <center>
            <img src={photoURL} />
            <p>{photoDescription}</p>
            </center>
        </div>
    )
}

export default Photo