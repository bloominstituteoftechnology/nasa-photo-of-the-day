import React,{useState} from "react";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

const KeywordTabs = ({setPage,keywords,setKeywords}) =>{
    const keywordData =["Star","Space","Hubble","Galaxy","Milky Way","Sun","Earth","Moon","NASA"];
    const [chipColor,setChipColor] = useState(["default","default","default","default","default","default","default","default","default"]);

    const handleClick = (item,chipColor,i) =>{
        setPage(1);

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
            <div>
            <p>Select Keywords: </p>
            </div>
            
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[0]} label={keywordData[0]} onClick={()=>{handleClick(keywordData[0],chipColor,0)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[1]} label={keywordData[1]} onClick={()=>{handleClick(keywordData[1],chipColor,1)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[2]} label={keywordData[2]} onClick={()=>{handleClick(keywordData[2],chipColor,2)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[3]} label={keywordData[3]} onClick={()=>{handleClick(keywordData[3],chipColor,3)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[4]} label={keywordData[4]} onClick={()=>{handleClick(keywordData[4],chipColor,4)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[5]} label={keywordData[5]} onClick={()=>{handleClick(keywordData[5],chipColor,5)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[6]} label={keywordData[6]} onClick={()=>{handleClick(keywordData[6],chipColor,6)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[7]} label={keywordData[7]} onClick={()=>{handleClick(keywordData[7],chipColor,7)}} />
            </Tooltip>
            <Tooltip title="click again to deselect">
            <Chip clickable color={chipColor[8]} label={keywordData[8]} onClick={()=>{handleClick(keywordData[8],chipColor,8)}} />
            </Tooltip>
                
        </div>
    )
}

export default KeywordTabs;