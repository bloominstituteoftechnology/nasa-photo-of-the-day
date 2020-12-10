import React from 'react'
import PropTypes from 'prop-types'

const Image = (props) => {
    const { title = "Hello... It's me!!", url = "https://images.unsplash.com/photo-1567879656049-f2265f23d8f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1999&q=80" } = props

    return (
        <>
            <img src={ url } alt={ title } />
            <h2>{ title }</h2>
        </>
    )
}

export default Image

// Image.PropTypes = {
//     title: PropTypes.string.isRequired
//     url: PropTypes.string.isRequired
// }