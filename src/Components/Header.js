import React, { useState, useEffect} from   'react';
import axios from "axios";
import PhotoSection from "./PhotoSection"



const Header = props =>{

    const [data, setData] = useState({})
    console.log(data)

        useEffect(() =>{
            axios.get("https://api.nasa.gov/planetary/apod?date=2020-10-20&api_key=DEMO_KEY")
                .then (response => {
                    console.log( response);
                    setData(response.data)
                    
                })
                .catch(console.log)

        }, []);

        return(
            <div>
                <h1>Title</h1>
                <h3>DATE</h3>
                <div><PhotoSection /></div>
                
            </div>
            
        )


}

export default Header;
