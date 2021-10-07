import React from 'react'

import styled, { keyframes } from 'styled-components';


const StyledText=styled.div`
    h2{
        font-size:4.2rem;
        :hover{
      cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='100' height='120' viewport='0 0 100 100' style='fill:black;font-size:60px;'><text y='50%'>🚀</text></svg>") 16 0,auto; /*!emojicursor.app*/
    }
`


const Description = (props) => {

    // const [ image, setImage ] = useState(null);
    const description  = props.data.explanation;
    const dataTitle= props.data.title;
    
    return (
        <StyledText>
            <h2>{ dataTitle }</h2>
            <p>{ description }</p>
        </StyledText>
    )
}

export default Description;