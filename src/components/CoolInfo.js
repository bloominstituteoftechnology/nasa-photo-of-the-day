import React from 'react'
import Video from './Video'
import Image from './Image'
import Explanation from './Explanation'

const CoolInfo = props => {

    const {mediaType, URL, expl, title} = props
    
    return (

        <div>
      
            {mediaType === "video" 
                ? <Video URL={URL}/> 
                : <Image URL={URL} title={title}/>}
            <Explanation explanation={expl}/>
      
        </div>
    
    )
}

export default CoolInfo