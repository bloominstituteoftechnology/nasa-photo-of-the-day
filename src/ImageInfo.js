import React from "react";

export default function ImageInfo(props) {
  const { imageInfo } = props;

  return (
    <div className="image-info">
      <p>{imageInfo.title}</p>
      <p>Image Credit and Copyright: {imageInfo.copyright}</p>
      <p>Explanation: {imageInfo.explanation}</p>
    </div>
  );
}
