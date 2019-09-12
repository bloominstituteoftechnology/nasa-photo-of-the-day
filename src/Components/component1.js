import React, {useState, useEffect} from "react";
import axios from "axios";
import Component2 from "./component2";




export default function Component1() {
    const [comp1, setComp1] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
            `)
            .then(response => {
                const comp1 = response.data;
                console.log("Daily photo", comp1);
                setComp1(comp1);
                console.log(response);
            })
            .catch(error => {
                console.log("Data not returned", error);
            })
    }, []);

    return (
        <div className="NasaPic">
            <h1>Space Picture of the day!</h1>
            <Component2 
                image={comp1.url}
                title={comp1.title}
                date={comp1.date}
                description={comp1.explanation}
                copyright={comp1.copyright}


            
            />
        </div>
    )



};