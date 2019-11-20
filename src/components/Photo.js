import React from "react";

export default function Photo({ photo }) {
  return (
      <div className="photo-layout">
        <h2 className="image_title">{photo.title}</h2>
        <div className="layout_body">
          <div className="left">
            <div className="image">
              {`${photo.url}`.toString().endsWith(".jpg") &&
                <img src={`${photo.url}`} alt={`${photo.title}`}/>
              }
              {!`${photo.url}`.toString().endsWith(".jpg") &&
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src={photo.url}
                    frameBorder="0"
                  />
                </div>  
              }    
            </div>
            <div className="image_links">
              {`${photo.url}`.toString().endsWith(".jpg") &&
                <p><a href={`${photo.url}`}>View Full-Sized Image</a> | <a href={`${photo.hdurl}`}>HD Version</a></p>
              }
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