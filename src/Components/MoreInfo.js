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
  <div>
  <button 
     style={{color:"indianred",fontSize:"18px",borderRadius:"5px",paddingBottom:"2px",transition:"ease-in-out 3s"}}
     id='expand'
     variant="outline-danger"
     onClick={toggleInfo} 
  >{infoOn ? 'Hide' : 'Show'} More Info
    </button>{' '}
  </div>
</div>
)

}

export default MoreInfo;