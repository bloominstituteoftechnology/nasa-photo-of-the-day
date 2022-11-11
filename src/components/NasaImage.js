import React, {useState,useEffect} from "react";
import Vimeo from '@u-wave/react-vimeo'
import "./NasaImage.css"
import TextStyle from "./TextStyle";

  const NasaImage = (props) => {
    
    const [isImg,setIsImg] = useState(false)
    const [isVideo,setIsVideo] = useState(false)

    const mediaSorter = () => {
      // API object has a "Media" key, use that to tighten up this sorter
      // Format code to handle the following: Youtube - GIF's 
      if(props.url.slice(props.url.length - 3,props.url.length) == "jpg"){
        setIsImg(true)
        setIsVideo(false)
      }else if(props.url.slice(props.url.length - 3,props.url.length) == "png"){
          setIsImg(true)
          setIsVideo(false)
      }else{
        setIsImg(false)
        setIsVideo(true)
      }
    }
    
    useEffect(()=> {
      mediaSorter()
    },[props.url])

    return(
      <div>
        {isVideo && <Vimeo video={props.url} autoplay/>}
        {isVideo && props.copyright && <TextStyle textType="article-content">Video Copyright {props.copyright}</TextStyle>}

        {isImg && <img className="nasa-image" src={props.url}/>}
        {isImg && props.copyright && <TextStyle textType="article-content">Image Copyright {props.copyright}</TextStyle>}
      </div>
    )
  }

  export default NasaImage