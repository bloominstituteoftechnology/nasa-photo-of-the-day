
import React from "react";
import {altTxt} from "../../Globals";

import Vplayer from "./Vplayer";

const thes = true;
const Media = ({url,isImg}) => {
//   const [theim,setTheim] = useState(null);
  // theim ? <img src={url} alt={altTxt}/> : <Vplayer />
//   setTheim(isIm);
        if(isImg === 'image'){
            return (
                <img src={url} alt={altTxt}/>
          );
        }else{
            return (
                <Vplayer />
          );
        }
        
};


export default Media;