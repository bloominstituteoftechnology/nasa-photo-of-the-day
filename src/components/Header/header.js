import React from 'react'
import './header.css'

const Header = (props) => {
    const {headerData} = props;
    return (
        <div className='header'>
            <h2>{headerData.title}</h2>
            <h4>{headerData.date}</h4>
        </div>
    )
}
export default Header;