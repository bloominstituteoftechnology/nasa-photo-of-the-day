import React from 'react'
import PropTypes from 'prop-types'

const Image = (props) => {
    const { title, url } = props

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