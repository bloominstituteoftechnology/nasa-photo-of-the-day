import React,{useState} from 'react';

 var Copyright = props => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div>
            
            <button onClick = {toggle}> Show copyright or nah?</button>
       {
           open ? props.copyright: undefined
       }
        </div>
    )
}

export default Copyright;