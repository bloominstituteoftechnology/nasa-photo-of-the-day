import React from 'react'

const Photo = (props) => {

    const {data} = props
    console.log(data)
    return (
            <img src={data.hdurl} alt=''></img>
        )
    
}

export default Photo