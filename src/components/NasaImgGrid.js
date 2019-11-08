import React,{useState,useEffect} from "react";
import axios from "axios";
import ImgCard from "./ImgCard";
import NextButtons from "./NextButtons";
import Grid from "@material-ui/core/Grid";
import KeywordTabs from "./KeywordTabs";

const NasaImgGrid = () =>{
    const [imgListData,setImgListData] = useState([]);
    const [keywords,setKeywords] = useState("");
    const [page,setPage] = useState(1);
    // 

    useEffect(()=>{
        axios.get(`https://images-api.nasa.gov/search?media_type=image&center=GSFC,JPL&keywords=${keywords}&page=${page}`).then(response =>{
            setImgListData(response.data.collection.items);
            console.log(response.data.collection.items);
        })
    },[page,keywords]);


    return(
        <div>
        
        <KeywordTabs keywords={keywords} setKeywords={setKeywords} setPage = {setPage}/>

        <NextButtons page = {page} setPage = {setPage} imgListData={imgListData}/>
        
        <Grid container spacing={3}>
        {imgListData.map(item =>{
            return <ImgCard key={item.data[0].nasa_id} 
            title={item.data[0].title} 
            date={item.data[0].date_created} 
            url={item.links[0].href} 
            descrip={item.data[0].description}
            imgKeywords={item.data[0].keywords}/>;
        })}
        </Grid>
        
        <NextButtons page = {page} setPage = {setPage} imgListData={imgListData}/>

        </div>
    );
};

export default NasaImgGrid;