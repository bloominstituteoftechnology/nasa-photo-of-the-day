import React,{useState, useEffect } from "react";
import axios from "axios";
import Astro from "./Astro";

const astroFn = (nasaPhotos) =>{
    return (
        <div>
            <Astro key={nasaPhotos} props={nasaPhotos} />
        </div>
    );
};

const Astros = () =>{

    // Set a new apikey if there is no more room for this one
    const [apiKey, setApiKey] = useState('7MH99v254pwUt83ewWyggb86uQjDcbUCJrAzM2xf');
    const [reqGet, setReqGet] = useState([{}]);
   
    const [nasaPhotos,setNasaPhotos] = useState([{}]);
    const reUrl = ["https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&hd=false&start_date=2020-02-01&end_date=2020-02-01","https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&hd=false&start_date=2020-01-01&end_date=2020-01-02"] ;
    const [reqUrl,setReqUrl] = useState(reUrl[0]);
    // let url = reUlr[1];
    useEffect(() =>{
        
        axios.get(reqUrl)
        .then((re) =>{
            let ar = [{}];
            setReqGet(re);
            console.log(re);
            if(!reqGet.data ) return <h3>Loading</h3>;
            
            re.data.map( (el,i) =>{
                console.log(re.data[0].title);
                console.log('else')
            ar[i] = el;
            //  console.log(el);
             setNasaPhotos(ar[i]);
             return astroFn(nasaPhotos);
            });
        
        })
        .catch((er) =>{
            console.log(er);
        })
    }, []);
    // useEffect(effectFn,[]);

    return (
        astroFn(nasaPhotos)
    );
};

export default Astros;