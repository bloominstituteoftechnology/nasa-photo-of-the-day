import React from 'react'


const Img = (props) =>{
    const { nasaImg } = props

    return(
        <div>
            <img src={nasaImg.url} alt= 'nasa photograph' />
        </div>
    )
}
export default Img 