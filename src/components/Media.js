/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD Video.js
 * 7/14/2021
 */

//React import statement
import React from "react";

//Default function definition, pass in {url}
export default function Media({url})
{
    console.log("This is the url " + {url});
    //Return the url of the video
    return  <div className = "video-responsiveness">
        <iframe
            width="853"
            height="480"
            src={`${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" 
        />
        </div>
};