import React from "react";
import DateInput from './DateInput';
import GetImage from './GetImage';
import MoreInfo from './MoreInfo';

function CheckandLoad({data,loading,updateChosenDate}){
    if (loading)
    return  <h2> Still loading...Please wait ! </h2>    
    else
    {
    return(
    <div className="load" style={{backgroundColor:"black" ,margin:"10px auto", }}>  
    <p style={{fontFamily: "Helvetica", fontStyle:"oblique",fontSize:"32px",}}>{data.title} <span style={{fontSize:"16px"}}>(Date: {data.date})</span></p>
   
    <div style={{display:"flex"}}>
    <DateInput
    updateChosenDate={updateChosenDate}
    />
    </div>
    <MoreInfo
     info={data.explanation} 
    />
    {/* <span>---</span> */}
    <GetImage 
      imageUrl={data.url}
      mediaType={data.media_type}
    />
    <h5>Copyright : {data.copyright}</h5>
    </div>
    )
    }
}

export default CheckandLoad;