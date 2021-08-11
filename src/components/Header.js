import React, { useState } from "react";

function Header(props) {
    const { copyright, date, title } = props;

    return (
        <>
        <div className='copyright'>
            <h1>Copyright: {copyright} </h1>
        </div>
        <div className='date'>
            <h1>Date: {date} </h1>
        </div>
        <div className='title'>
            <h1>Title: {title} </h1>
        </div>
        </>
    )
}

export default Header;