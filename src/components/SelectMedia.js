import React from 'react'
import Video from './Video'
import Image from './Image'
const SelectMedia = (props) => {
    const { media_type, title, url } = props

    return (
        media_type === 'Image'
        ? <Image title={title} url={url} />
        : <Video title={title} url={url} />
    )
}

export default SelectMedia