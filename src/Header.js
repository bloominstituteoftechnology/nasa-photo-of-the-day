import React from 'react';

const Header = props => {
    return(
        <header className = 'header'>
        <div className = 'headerItems'>
        <p className='text text1'>Photo Of The Day: {props.title}</p> 
        <p className='text'>Date: {props.date}</p>  

        </div>
        </header>
    )
}

export default Header;


