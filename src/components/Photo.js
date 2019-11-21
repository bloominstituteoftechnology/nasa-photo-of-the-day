import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Video = styled.iframe`
  width: 100%;
  min-height: 300px;
`;

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
                <VideoContainer className="video">
                  <Video src={photo.url} frameBorder="0" />
                </VideoContainer>  
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