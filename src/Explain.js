import React from 'react'


const Explain = (props) =>{
    const { nasaInfo } = props

    return(
        <div>
            <p> {nasaInfo.explanation}</p>
        </div>
    )
}
export default Explain 