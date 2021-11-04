import React from 'react';
import '../App.css';

const Header = (props) => {
    return (
        <div className='container'>
            <div className='navbar'>
                <h1>NASA</h1>
                <div className='nav-list'>
                    <a href='#' >Home</a>
                    <a href='#' >About</a>
                    <a href='#' >Shop</a>
                    <a href='#' >Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header;