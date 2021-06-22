import React from 'react'

function Header(props) {
    const { title, date } = props
    return (
        <div>
            <h1>{title}</h1>
            <h2 className='todaysDate'>today's date is: {date}</h2>
            <h2>And now for something you'll really like!</h2>
        </div>
    )
}
export default Header