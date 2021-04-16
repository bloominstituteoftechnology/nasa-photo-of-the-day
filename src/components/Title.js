// STEP 15: CREATE THIS PAGE

// STEP 2: ADD LINE 15 AKA import styled from 'styled-components'
// BASIC RULES OF STYLING IN JSX:
    // STYLED COMPONENTS ARE BUILT OUTSIDE OF THE COMPONENTS THEY SERVE
    // MUST BE CAPITALIZED
    // MUST HAVE SEMICOLONS ;
// STEP 3: SET UP STYLED SECTION ON LINE 18, IN THIS INSTANCE THE RETURN IN 'Title' is 'h1'
// STEP 4: ADD `` AFTER DECLARING STYLED VARIABLE AND WRITE CSS STYLE CODE INSIDE. AKA LINE 18
// STEP 5: WE MUST REPLACE THE ORIGINAL <h1> </h1> ON LINES 25 & 27 WITH NEW VARIABLE NAME.
// STEP 6: STEPS 3 - 5 WOULD REPEAT OVER AND OVER FOR HOW MANY HTML ELEMENTS THERE ARE IN EACH COMPONENT


import React from 'react';
import styled from 'styled-components'


const StyledTitle = styled.h1`
    color: red;
    font-weight: bold;

    &:hover {
        color: green;
    }
`

const Title = props => {
    const {title} = props;

    return (
        <StyledTitle> 
            {title}
        </StyledTitle>
    )
}

export default Title;