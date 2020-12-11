import React from 'react'



export default function Picture({title, url, description}){


    return (

        <div className='container'>
        <h1>{title}</h1>
        <img src="{url}"/>
        <h3>"{url}"</h3>
        <p>{description}</p>

      </div>

    )
  }

