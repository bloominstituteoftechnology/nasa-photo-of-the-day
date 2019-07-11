import React,{useState} from 'react';

 var Day = props => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div>
            
            <button onClick = {toggle}> Toggle date</button>
       {
           open ? props.date: undefined
       }
        </div>
    )
}

export default Day;