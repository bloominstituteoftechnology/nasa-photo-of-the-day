import React,{useState} from "react";
import Button from 'react-bootstrap/Button';

function MoreInfo({info}){
console.log('data==',info)
const [infoOn,setInfoOn]=useState(false);
const [explanation,setExplanation]=useState(info);

const toggleInfo = () => {
  setInfoOn(!infoOn);
  };

return(
<div>
<h5>More info here!</h5>
{infoOn && 
    <p style={{textAlign:"left",backgroundColor:"#080808"}}>
      {info}</p>
  }
 
<Button 
     id='expand'
     onClick={toggleInfo} 
    variant="info"
>{infoOn ? 'Hide' : 'Show'} More Info
</Button>


</div>

)

}

export default MoreInfo;