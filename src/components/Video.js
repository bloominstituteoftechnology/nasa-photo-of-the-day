import React from "react";

export default function Video({ url }) {
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
}
