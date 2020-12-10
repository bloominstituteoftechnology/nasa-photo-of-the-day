import React from 'react'
import '../App.css'
import styled from 'styled-components'
export default function Header(){


const HeaderWhole = styled.div`
h1{
    font-size: ${pr=> pr.theme.sizeTitle};
    margin-top: 4%;
    color:${pr=> pr.theme.primaryColor};
}
div{
    display:flex;
    justify-content: center;
}
a{
    margin: 1% 2% 3% 2%;
    text-decoration: none;
    color:${pr=>pr.theme.secondaryColor};  
    font-size:${pr => pr.theme.sizeHeader};
    font-weight: 'bold';
}
`




return(
    <HeaderWhole>
        <h1 className='title'>Nasa Photo Of The Day</h1>
        <div className='header'>
            <a href='#'>Home</a>
            <a href='#'>Info</a>
            <a href='#'>History</a>
            <a href='#'>Contact</a>
        </div>
    </HeaderWhole>
)}