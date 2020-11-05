import React, { useState } from 'react';


const PageHeader = () => {
    const [dfHeader, setDfHeader] = useState('NASA Picture of the Day!')
    return(
    <div id='header' onMouseEnter={() => {
        setDfHeader(`Remy's NASA API WebApp`);
    }}>
        <h1>{dfHeader}</h1>
    </div>
    )
}

export default PageHeader;
