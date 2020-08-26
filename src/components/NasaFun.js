import React from 'react'

function NasaFun(props){
    console.log('Nasa fun props: ', props)
    return(
        
        <div>
            <h2> 
                Version: {props.version}
            </h2>
        </div>
    )

}

export default NasaFun