import React from 'react'
import './styles.css'

const InnerCard = ({ data }) => {
    console.log('INNERCARD', data)

    const { title, explanation, copyright, date } = data
    return (
        <div className="inner">
          <h2 className="title">{title}</h2>
          <time className="subtitle">{`Copyright: ${copyright}, Date: ${date}`}</time>
        </div>
    )
}

export default InnerCard