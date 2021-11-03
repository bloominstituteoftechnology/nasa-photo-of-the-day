import React, {useState} from "react";
import './Logo.css';

function Logo(){
    const [logoText, setLogoText] = useState('Nasa Photo Of The Day')

    return(
        <h1>{logoText}</h1>
    )
}

export default Logo;