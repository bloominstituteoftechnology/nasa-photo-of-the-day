import React,{useState,useEffect} from "react";
import axios from "axios";
import ImgCard from "./ImgCard";
import NextButtons from "./NextButtons";
import Grid from "@material-ui/core/Grid";
import KeywordTabs from "./KeywordTabs";
import SearchBar from "./SearchBar";
import { Button } from "@material-ui/core";

const NasaImgGrid = () =>{
    const [imgListData,setImgListData] = useState([]);
    const [keywords,setKeywords] = useState("");
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState("");
    

    useEffect(()=>{
        axios.get(`https://images-api.nasa.gov/search?media_type=image&center=GSFC,JPL&keywords=${keywords}&page=${page}&title=${search}`).then(response =>{
            setImgListData(response.data.collection.items);
            console.log(response.data.collection.items);
        })
    },[page,keywords,search]);

    const checkKeywords =(object)=>{
        if(Object.keys(object).includes("keywords") === true){
            return object.keywords;
        }else{
            return []}

    }


    return(
        <div>
        <div className="searchAndClear">   
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} lg={3} >
            <SearchBar search={search} setSearch={setSearch}/>
            </Grid>
            <Grid item xs={12} sm={12} lg={7} >
            <KeywordTabs keywords={keywords} setKeywords={setKeywords} setPage = {setPage}/>
            </Grid>
            <Grid item xs={12} sm={12} lg={2} >
            <div className="clearBtnBox">
            <Button variant="outlined" onClick={()=>{window.location.reload(false);}}>Clear All</Button>
            </div>
            </Grid>
        </Grid>

        </div> 

        <NextButtons page = {page} setPage = {setPage} imgListData={imgListData}/>
        
        <Grid container spacing={3}>
        {imgListData.map(item =>{
            return <ImgCard key={item.data[0].nasa_id} 
            title={item.data[0].title} 
            date={item.data[0].date_created} 
            url={item.links[0].href} 
            descrip={item.data[0].description}
            imgKeywords={checkKeywords(item.data[0])}/>;
        })}
        </Grid>
        
        <NextButtons page = {page} setPage = {setPage} imgListData={imgListData}/>

        </div>
    );
};

export default NasaImgGrid;