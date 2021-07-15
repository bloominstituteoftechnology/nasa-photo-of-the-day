import React from 'react';
import NavBar from './NavBar';

export default function Header () {
    const style = {
        borderBottom: '3px solid black',
        backgroundColor: '#00BFFF',
    };

    const styleH1 = {
        fontSize: '2em',
        color: 'white',
    };

    return (
        <div style = {style}>
            <h1 style = {styleH1}>NASA Picture of the Day</h1>
            <NavBar />
        </div>
    );
}