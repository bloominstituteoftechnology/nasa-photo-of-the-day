import React from 'react';

const TextOnTop = props =>{
    const { title } = props;

    return (
        <div className='textTop'>
            <p>Here is {title}</p>
        </div>
    )
}

export default TextOnTop;