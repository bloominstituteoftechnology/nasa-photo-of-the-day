import React from 'react'

function Image(props){
    const { url } = props
    return(
        <>
            <img src={ url } alt={'Nasa Visual of the Day'} />
        </>
    )
}

export default Image