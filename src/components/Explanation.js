import React, {useState} from 'react'


function Explanation (props){
    const [explanation, setExplanation] = useState(false)
    const onClick = () => setExplanation(true);
    return(
        <div className='button'>
            <button onClick={onClick}>More Information</button>
            {explanation ? props.explanation : null}
            
        </div>
    )
    }
    
export default Explanation;