import React, { useState, useEffect} from   'react';
import axios from "axios";



const Header = props =>{

    const [data, setData] = useState({})

        useEffect(() =>{
            axios.get("https://api.nasa.gov/planetary/apod?api_key=RpYTmNgXaheC4U17auPCes2znlmQlQlTn2xIKpsc")
                .then (res => {
                    console.log(res);
                    setData(res.data)
                })
                .catch(console.log)

        }, []);

        return(
            <div>
                <h1>Title</h1>
                <h3>DATE</h3>
            </div>
        )





}

export default Header;
