import React from 'react'

function Explanation(props) {
    console.log(props)
    return (
        <p>
            {props.data.explanation}
        </p>
    )
}

export default Explanation