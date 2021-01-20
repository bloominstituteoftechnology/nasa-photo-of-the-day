import React from 'react'



function Header(props) {
    const {nasaData}=props
    return (
        <div>
            <h1>Nasa Photo Of The Day</h1>
            <div>{nasaData.date}</div>
        </div>
    )
}

export default Header
