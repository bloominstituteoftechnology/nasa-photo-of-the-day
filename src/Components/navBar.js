import React, {useState, useEffect} from 'react';

const NavBar = (props) =>{
    const {setTypeOfImg} = props;
    
    return (
    <div className="nav-bar">
        <h1>NASA - APOD</h1>
        <div className="type-selector">
            <button onClick={() =>setTypeOfImg('auto')}>Auto</button>
            <button onClick={() =>setTypeOfImg('select')}>Select</button>
        </div>
    </div>
    )
}

export default NavBar;