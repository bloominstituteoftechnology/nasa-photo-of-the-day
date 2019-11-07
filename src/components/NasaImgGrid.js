import React,{useState,useEffect} from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

const NasaImgGrid = () =>{
    const [imgListData,setImgListData] = useState([]);
    const [keywords,setKeywords] = useState("star,space,Hubble");
    const [page,setPage] = useState(1);

    useEffect(()=>{
        axios.get(`https://images-api.nasa.gov/search?media_type=image&keywords=${keywords}&page=${page}`).then(response =>{
            setImgListData(response.data.collection.items);
            console.log(response.data.collection.items);
        })
    },[]);

    return(
        <div>
        {imgListData.map(item =>{
            return <ImgCard key={item.data[0].nasa_id} 
            title={item.data[0].title} 
            date={item.data[0].date_created} 
            url={item.links[0].href} 
            descrip={item.data[0].description}/>;
        })}
        </div>
    );
};

export default NasaImgGrid;