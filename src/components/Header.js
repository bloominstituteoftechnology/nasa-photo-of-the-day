import React from 'react';
import styled from  'styled-components';

export default function Header(props){
    const {title} = props;
    const Headers = styled.div`
    h1{
        font-family: 'Chelsea Market', cursive;
        font-size: 2rem;
        color: black;
        padding-left: 2%;
        
    }
    `;
    return (
        <Headers>
            <div>
            <h1>Picture of The Day From Nasa</h1>
            </div>
            
            <section className="logo">
            <img src="https://stoic-jones-8cfd50.netlify.app/static/media/nasa-logo-web-rgb-1.43be7d63.png" alt="NASA Logo"></img>
            </section>
            <nav className="home-login-subscribe">
                <a href="index.html">HOME</a>
                <a href="index.html">LogIn/Out</a>
                <a href="index.html">Subscribe</a>
            </nav>
            {/* <h3>{title}</h3> */}
        </Headers>
    )
}
// export default Header;