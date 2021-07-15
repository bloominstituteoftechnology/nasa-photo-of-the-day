import React from "react";

export default function Media({ url, media_type }) {
  if (media_type === "video") {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  } else if (media_type === "image") {
    return (
      <div className="image">
        <img src={url} alt="alternate text"></img>
      </div>
    );
  }

  return null;
}
