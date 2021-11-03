import React, {useState} from "react";
import "./Button.css";

function Button(props){
    const [button, setButton] = useState(props.btnText || 'login');
    const [buttonClass, setButtonClass] = useState(props.btnClass ||'login-btn');
    return(
        <button className={buttonClass}>{button}</button>
        
    )
}

export default Button;