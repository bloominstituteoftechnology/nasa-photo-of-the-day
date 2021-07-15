import React from 'react';

export default function NavBar () {
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '1.3rem',
        backgroundColor: '#5F9EA0',
    };

    const styleA = {
        textDecoration: 'none',
        color: 'white',
    };

    return (
        <div>
            <nav style = {style}>
                <a href='#NASA' style = {styleA}>NASA</a>
                <a href='#random' style = {styleA}>Random</a>
                <a href='#yesterday' style = {styleA}>Yesterday</a>
                <a href='#about' style = {styleA}>About</a>
            </nav>
        </div>
    );
}