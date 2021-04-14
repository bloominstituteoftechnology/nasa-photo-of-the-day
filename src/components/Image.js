// STEP 9: ALWAYS IMPORT REACT 
// STEP 10: CREATE A VARIABLE THAT WE CAN PASS 'props' through
// STEP 11: ON LINE 8 WE ARE DECLARING THE PROP OF IMAGE THAT WE CREATED IN PARENT.
// STEP 12: LINES 11 - 17 IS OUR RETURN, WE MUST RETURN AN IMAGE THAT WE DECLARED.  USING JSX, CREATE THE RETURN.
// STEP 13: LINE 22 MAKE SURE WE 'export default variableName'
// STEP 14: MOVE ONTO ALL OTHER COMPONENTS IN ORDER. IN THIS CASE TITLE.

import React from 'react';

const Image = props => {
    const {image} = props
        
    return (
        <img 
            alt = 'This is NASA'
            className = 'daily-picture'
            src = {image}
        />
    )
} 

export default Image;