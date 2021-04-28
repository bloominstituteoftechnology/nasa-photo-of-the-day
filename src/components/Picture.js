import React from 'react'

const Picture = (props)=>{
    const {data} = props

    return(
    <div>
        <img src={data.url} alt="nasa OPAD"/>
        <p>Date: {data.date}</p>
        <p>{data.explanation}</p>
    </div>
)
}

export default Picture