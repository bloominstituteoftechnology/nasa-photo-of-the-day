import React from 'react'





export default function Media(props){

    const { title, url} = props

    return (

        
        <div className='container'>
        <h1>{title}</h1>
        <img alt="spaceimage"src={props.url}/>
        <h3>{url}</h3>
      </div>
    )
  }