import React from 'react'
//importing style
import '../styles/App.css'
//importing nasa logo
import logo from '../assets/images/logo.png'

const Title = ({ title, subTitle }) => {
    return (
        <div className="Title">
            <div className="brand">
                <img src={logo} alt='NASA Logo' />
                <h3>{ subTitle }</h3>
            </div>
            <h4>{ title }</h4>
        </div>
    )
}

export default Title;