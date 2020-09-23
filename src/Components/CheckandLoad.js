import React from "react";
import DateInput from './DateInput';
import GetImage from './GetImage';
import MoreInfo from './MoreInfo';


function CheckandLoad({data,loading,updateChosenDate}){
    if (loading)
    return  <h2>Still loading...Please wait ! </h2>    
    else
    {
    return(
    <div >
    <h4>Date:{data.date}</h4>
    <h2 style={{ fontFamily: "Helvetica", fontStyle:"oblique",fontSize:"32px",margin:"0 auto"}}>{data.title}</h2>

    <div style={{display:"flex", justifyContent:"left"}} >
    <DateInput
    updateChosenDate={updateChosenDate}
    />
    <MoreInfo
     info={data.explanation} 
    />
    {/* <span>---</span> */}
    </div>
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