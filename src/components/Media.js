/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD Media.js
 * 7/14/2021
 * 2.2.4 Advanced styling
 * 7/15/2021
 */

//React import statement
import React from "react";

//Default function definition, pass in {url}
export default function Media({url})
{
    //If the pic of the day is a video, do this...
    if (`${url}`.includes("youtube") == true)
    {
        console.log("This is the url " + {url});
        //Return the url of the video
        return  <div className = "video-responsiveness">
        {/**iframe to center the video player */}
            <iframe
            width="853"
            height="480"
            src={`${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" 
            />;
        </div>
    }
    
    //...otherwise
    else 
    {
        //...show a static image
        return <div className = "image"> 
        <img src = {`${url}`} alt  = "alternate text"></img></div>
    }
};

 