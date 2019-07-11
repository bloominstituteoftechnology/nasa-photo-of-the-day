import React,{useState} from 'react';

 var Title = props => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div>
            
            <button onClick = {toggle}> Toggle Title</button>
       {
           open ? props.title: undefined
       }
        </div>
    )
}

export default Title;