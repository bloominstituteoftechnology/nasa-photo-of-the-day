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
    <div>
    <DateInput
    updateChosenDate={updateChosenDate}
    />
    <span>---</span>
     
    <h4>Date:{data.date}</h4>
    <h2>{data.title}</h2>
    <MoreInfo
     info={data.explanation} 
    />
    <span>---</span>
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