import React from "react";

const Header = props => {
    const {title, link} = props;

    return(
        <div className='header-cont'>
            <div className='titleWrapper'>
                <h1>{title}</h1>
            </div>
            <div className='navWrapper'>
                <nav>
                    <a href={link}>Source</a>
                    <a href='/'>About</a>
                    <a href='/'>Home</a>
                    <a href='/'>Contact</a>
                </nav>
            </div>
        </div>
    )
}
export default Header