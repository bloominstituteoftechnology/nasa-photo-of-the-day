import React from 'react'
import PropTypes from 'prop-types'

const Information = (props) => {
    const { date, title, explanation } = props

    return (
        <div className="info">
            <h2>{ title }</h2>
            <small>{ date }</small>
            <p>{ explanation }</p>
        </div>
    )
}

export default Information

// Information.PropTypes = {
//     title: PropTypes.string.isRequired
//     date: PropTypes.string.isRequired
//     explanation: PropTypes.string.isRequired
// }