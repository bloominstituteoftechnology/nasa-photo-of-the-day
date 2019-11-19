import React from "react";

export default function Photo({ photo }) {
  return (
      <div className="photo-layout">
        <h2 className="image_title">{photo.title}</h2>
        <div className="image">
          <img src={`${photo.url}`} alt="NASA PofD"/>
        </div>
        <div className="image_links">
          <p><a href={`${photo.url}`}>View Full-Sized Image</a> | <a href={`${photo.hdurl}`}>HD Version</a></p>
        </div>
        <div className="description_container">
          <p className="description">{photo.explanation}</p>
          {photo.copyright !== null &&
            <p className="copyright">Copyright: {photo.copyright}</p>
          }
          
        </div>
      </div>
  );
}