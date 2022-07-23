import Dropdown from './Dropdown'
import React, {useState} from 'react';
import styled from 'styled-components'

const Header = props => {


    return(
        <header className = 'header'>
        <div className = 'headerItems'>
        <p className='text text1'>Photo Of The Day: {props.title}</p> 
        <p className='text'>Date: {props.date}</p>  
        <Dropdown/>
        </div>
        </header>
    
    )
}

export default Header;


