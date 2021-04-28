import React from 'react'

const Title = (props) => {

    const { data } = props
    
    return (
        <h1>Photo of the Day: {data.title}</h1>
    )
}

export default Title