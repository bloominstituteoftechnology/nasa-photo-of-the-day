import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.div`
    width: 100%;
    height: 40vh;

    & img{
        height: 100%;
        border-radius: 10%;
    }
`

export default function Video ({url}) {
    console.log(url)
    if (!url) return <h3>loading....</h3> 
    return(
        <StyledVideo>
            {/* { (!url) ? <h3>loading up...</h3> : (url.includes())} */}
            {(url.includes('outube')) ? <iframe src ={url} title = 'nasaVid' width = 'auto' height = '100%'> </iframe> : <img src ={url} alt = 'AssosiatedNasaPhoto'/> }
             
            {/* <img src={url} alt="yea"/> */}
            
        </StyledVideo>
    )

}