import React,{useState} from "react";
import Chip from '@material-ui/core/Chip';

const KeywordTabs = ({keywords,setKeywords}) =>{
    const keywordData =["Star","Space","Hubble","Milky Way","Earth","Sun"];
    const [chipColor,setChipColor] = useState(["default","default","default","default","default","default"])

    const handleClick = (item,chipColor,i) =>{
        if(keywords.includes(`${item}`) === true){
            setKeywords(keywords.replace(`,${item}`,""));
        }else{
            setKeywords(keywords.concat(`,${item}`));
        }
        
        if(chipColor[i] === "default"){
            return chipColor[i]="primary";
        }else{ 
            return chipColor[i]="default";
        };
    };

    return(
        <div className="tabBtns">
            <h3>Select Keywords: </h3>
            <Chip clickable color={chipColor[0]} label={keywordData[0]} onClick={()=>{handleClick(keywordData[0],chipColor,0)}} />
            <Chip clickable color={chipColor[1]} label={keywordData[1]} onClick={()=>{handleClick(keywordData[1],chipColor,1)}} />
            <Chip clickable color={chipColor[2]} label={keywordData[2]} onClick={()=>{handleClick(keywordData[2],chipColor,2)}} />
            <Chip clickable color={chipColor[3]} label={keywordData[3]} onClick={()=>{handleClick(keywordData[3],chipColor,3)}} />
            <Chip clickable color={chipColor[4]} label={keywordData[4]} onClick={()=>{handleClick(keywordData[4],chipColor,4)}} />
            <Chip clickable color={chipColor[5]} label={keywordData[5]} onClick={()=>{handleClick(keywordData[5],chipColor,5)}} />
                
        </div>
    )
}

export default KeywordTabs;