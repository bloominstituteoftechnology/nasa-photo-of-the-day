
import React from "react";
import {altTxt} from "../../Globals";
import {imgClass} from "../../App.css";

import Vplayer from "./Vplayer";

// const thes = true;
const Media = ({url,isImg}) => {
//   const [theim,setTheim] = useState(null);
  // theim ? <img src={url} alt={altTxt}/> : <Vplayer />
//   setTheim(isIm);
        if(isImg === 'image'){
            return (
                <img className="imgClass" src={url} alt={altTxt}/>
          );
        }else if(isImg === 'video'){
            return (
                <Vplayer />
          );
        }else{
            return (
                <img className="imgClass" src={url} alt={altTxt}/>
          );
        }
        
};


export default Media;