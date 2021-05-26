import React from 'react';
import logoImg from '../Nasa_Logo.jpeg';

const Header = (props) => {
    return (
        <div>
            <img className = 'App-logo' alt='logo'src={logoImg}/>
            <h2>Image of the Day</h2>
        </div>
    )
}

export default Header;