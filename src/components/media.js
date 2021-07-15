import React from "react";

export default function Media({ url, picurl }) {
  const isVideo = () => {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={url}
          frameBorder="2"
          allow="autoplay"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  };

  const isImage = () => {
    return (
      <div>
        <img src={url} alt="stuff" />
      </div>
    );
  };

  return picurl === "image" ? (
    isImage()
  ) : picurl === "video" ? (
    isVideo()
  ) : (
    <h1>textt</h1>
  );
}
