import React,{useState} from 'react';

 var Explanation = props => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div>
            <button onClick = {toggle}> Toggle explanation</button>
       {
           open ? props.explanation: undefined
       }
        </div>
    )
}

export default Explanation;