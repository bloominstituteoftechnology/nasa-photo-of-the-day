import React from "react";
import { Image } from "semantic-ui-react";

export default function VidData(props) {
  return (
    <div>
      {props.passData.media_type === "video" ? (
        <>
          <iframe
            src={props.passData.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </>
      ) : (
        <>
          <img src={props.passData.url} />
        </>
      )}

      {/* //<Image src={props.passData.url} />
    <img
      src={props.passData.url}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="video"
/> */}
    </div>
  );
}

// <iframe src="https://www.w3schools.com"></iframe>

/* <img class="ui medium bordered image" src="/images/wireframe/white-image.png"></img> */
