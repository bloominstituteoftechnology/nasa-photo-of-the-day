import React from 'react'

const Title = props => {

    const {title, date} = props
    console.log(`dailyTitle`, title)
    // console.log(`title`, props.dailyTitle.title)

    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    )
}

export default Title