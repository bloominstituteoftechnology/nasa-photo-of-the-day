import React, {useState, useEffect} from "react";
import axios from 'axios';
import TechCard from './TechCard';


function CoolTech(){
    const [coolTech, setTech] = useState([]);


useEffect(()=> {
    axios
    .get('https://api.nasa.gov/techport/api/specification?api_key=vM8Vqe00mUa1fFhACqp6NCcTghOHA59JAewEskSs').then(response=> {
        const coolTech = response.data;
        console.log('Tech: ', coolTech);
        setTech(coolTech);
    });
}, []);

return (
    <div className="coolTech">
        <TechCard
            // description = {coolTech.definitions.project.description}
        />
    </div>
    );
}

export default CoolTech;