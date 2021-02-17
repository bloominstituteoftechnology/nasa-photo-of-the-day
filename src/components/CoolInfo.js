import React from 'react'
import Video from './Video'
import Image from './Image'
import Explanation from './Explanation'

const CoolInfo = props => {

    const {mediaType, URL, expl} = props

    // const media = mediaType.split("");
    

    

    return (

        // const which = {}

        <div>
            {mediaType === "video" 
                ? <Video URL={URL}/> 
                : <Image URL={URL}/>}
            <Explanation explanation={expl}/>
        </div>
    )
}

export default CoolInfo