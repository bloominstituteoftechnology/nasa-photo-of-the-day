import React, {useState} from 'react'



const Header = (props) => {
     
    return (
        <div className='headerDiv'>
            <h1>Daily Nasa</h1>
            <h2>Today's date: {nasaData.date}</h2>
            <h3>{nasaData.title}</h3>
            
        </div>
    )
}

export default Header;