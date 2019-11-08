import React,{useState,useEffect} from "react";
import Button from '@material-ui/core/Button';


const NextButtons = ({page,setPage,imgListData}) =>{

    const Disabledbtn = () =>{if(page === 1){
         return <Button variant="outlined" color="primary" disabled>
        Previous Page</Button>;
    }else{
         return <Button onClick={()=>{setPage(page-1)}}
        variant="outlined" color="primary">
        Previous Page</Button>;
    }
    }

    const DisabledNextBtn = () =>{if(imgListData.length < 100){
        return <Button variant="outlined" color="primary" disabled>
       Next Page</Button>;
   }else{
        return <Button onClick={()=>{setPage(page+1)}}
       variant="outlined" color="primary">
       Next Page</Button>;
   }
   }

    return(
        <div className="pagesBtn">
        
        {Disabledbtn()}

        {DisabledNextBtn()}
        </div>
    )
}

export default NextButtons;