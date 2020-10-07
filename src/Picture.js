import React from 'react'

export default function Picture(props) {

    const {source} = props

    return(
        <div className="spacePic">
            <img alt="space pic" src={source}></img>
            </div>
    )

}