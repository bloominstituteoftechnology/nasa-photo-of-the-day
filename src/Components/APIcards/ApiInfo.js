import React, {
    useState,
    useEffect
} from "react";
import axios from "axios";
import ApiCard from "./ApiCard";

export default function ApiInfo() {

    const [info, setInfo] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=2kelUrCGejCnNDr14pSjvaYMR64NpaQ9usWIsK1J`)
            .then(response => {
                //   console.log(response)
                const info = response.data;
                console.log("nasa info", info);
                setInfo(info);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);
    return ( 
       
        <div className="spaceDiv">
            {[info].map(index => {
                return( 
                    <ApiCard
                        key={[info.index]}
                        title={[info.title]}
                        date={[info.date]}
                        url={[info.url]}
                        explanation={[info.explanation]}
                        copyright={[info.copyright]}
                    />
                )
            })

            }
        </div>
       
    )
}