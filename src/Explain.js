import React from 'react'

//export explain
const Explain = (props) =>{
    const { nasaInfo } = props

    return(
        <div>
            <p> {nasaInfo.explanation}</p>
        </div>
    )
}
export default Explain 