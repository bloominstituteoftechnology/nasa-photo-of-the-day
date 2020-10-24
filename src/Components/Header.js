import React, { useState, useEffect } from   'react';
import axios from "axios";
import PhotoSection from "./PhotoSection"
import Explanation from './Explanation';



const Header = props =>  {

    const [data, setData] = useState({})
    

        useEffect(() =>{
            axios
            .get("https://api.nasa.gov/planetary/apod?api_key=RpYTmNgXaheC4U17auPCes2znlmQlQlTn2xIKpsc")
                .then (res => {
                    setData(res.data)
                    console.log(res.data);
                })
                .catch(console.log)

        }, []);

        return(
            <div>
                <h1>Nasa Photo of the Day</h1>
                <h2>Today's Date:   {data.date}</h2>
                <h2>Photo: {data.title}</h2>
                <h4>By: {data.copyright}</h4>
                <PhotoSection  url={data.url}/>
                <Explanation explanation ={data.explanation}/>
                
                
            </div>
            
        )


}

export default Header;
