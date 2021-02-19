import React from 'react'
import Info from './Info'

const Post = props => {  
       
    const{url, data, setCurrentDate} = props

    return(
    <div className='container'>
      <h1>{data.title}</h1>
      <div className='imgContainer'>
        <img src={url} ></img>
      </div>
      <div>
          <Info data={data} />                    
      </div>
    </div>
  
  )
}

export default Post
