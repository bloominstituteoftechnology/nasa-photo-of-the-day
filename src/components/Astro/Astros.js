import React,{useState, useEffect } from "react";
import axios from "axios";
import Astro from "./Astro";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const astroFn = (nasaPhotos,reqGet) =>{
    console.log('do you work');
    console.log(reqGet);
    console.log('after that');
    let ar = [{}];
    return  reqGet.map( (el,i) =>{
                    // console.log(re.data[0].title);
                    console.log('else')
                ar[i] = el;
                  console.log(ar[i]);
                //  setNasaPhotos(ar[i]);
                 console.log(nasaPhotos);
                 return(
                    <Astro key={nasaPhotos} props={nasaPhotos} />
                 )
                
                });
            
           
        

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
            setReqGet(re.data);
            console.log(re);
            if(!reqGet.data ) console.log('undeeefined');
            
            console.log(reqGet);
            re.data.map( (el,i) =>{
                // console.log(re.data[0].title);
                // console.log('else')
            ar[i] = el;
              console.log(ar);
              if(nasaPhotos === null){
                   setNasaPhotos(ar[i]);
              }else{
                  console.log(nasaPhotos);
                  setNasaPhotos(ar[i])
              }
              
             console.log('fom')
             console.log(nasaPhotos);
            });
            
        })
        .catch((er) =>{
            console.log(er);
        })
    }, []);
    // useEffect(effectFn,[]);

    return (
        <Astro key={nasaPhotos} props={nasaPhotos} />
    );
};

export default Astros;