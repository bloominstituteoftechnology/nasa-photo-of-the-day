import React from 'react'
import PropTypes from 'prop-types'

const Information = (props) => {
    const { date = "2010-10-10", title = "Galactic cow, to infinity and beyond", explanation = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." } = props

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