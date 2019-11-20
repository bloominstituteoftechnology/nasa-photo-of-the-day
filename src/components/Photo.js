import React from "react";

export default function Photo({ photo }) {
  return (
      <div className="photo-layout">
        <h2 className="image_title">{photo.title}</h2>
        <div className="layout_body">
          <div className="left">
            <div className="image">
              <img src={`${photo.url}`} alt={photo.title}/>
            </div>
            <div className="image_links">
              <p><a href={`${photo.url}`}>View Full-Sized Image</a> | <a href={`${photo.hdurl}`}>HD Version</a></p>
            </div>
          </div>
          <div className="right">
            <div className="description_container">
              <p className="description">{photo.explanation}</p>
              {/* Check if there is a copyright */}
              <p className="copyright">Copyright: {photo.copyright !== undefined ? `${photo.copyright}` : `In Public Domain`}</p>
            </div>
          </div>
        </div>
      </div>
  );
}