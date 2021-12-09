// imports
import React from 'react';

// Export default content
function Sidebar(props) {
    const { nasaTitle, nasaDate } = props;
    return (
       <div>
            <h1>{nasaTitle}</h1> 
            <h2>{nasaDate}</h2>
       </div>
    )
}

export default Sidebar;