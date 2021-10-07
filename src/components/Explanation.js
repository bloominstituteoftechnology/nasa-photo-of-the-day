import React, {useState} from 'react'
import styled from 'styled-components';
const StyledExplanation = styled.div`

opacity: 0.5;
&:hover{
    opacity: 1;
}
`

function Explanation (props){
    const {color} = props
    const [explanation, setExplanation] = useState(false)
    const onClick = () => setExplanation(true);
    return(
        <StyledExplanation className='button' color = {color}>
            <button onClick={onClick}>More Information</button>
            {explanation ? props.explanation : null}
            
        </StyledExplanation>
    )
    }
    
export default Explanation;