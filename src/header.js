import React from 'react'

function Header(props) {
    const { title, date } = props
    return (
        <div>
            <h1>{title}</h1>
            <h2 className='todaysDate'>{date}</h2>
            <h2>NASA Photo of the Day!!!</h2>
        </div>
    )
}
export default Header