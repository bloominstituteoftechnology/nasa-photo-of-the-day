import React from 'react';

export default function Header({copyright}){
    return(
        <div className='footer'>
            <p>Copyright by {copyright}</p>
        </div>
    )
}