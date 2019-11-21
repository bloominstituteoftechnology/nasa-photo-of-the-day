import React from "react";
import styled from "styled-components";

const LayoutBody = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  padding: 10px 30px 20px 30px;

  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 20px;
  }
`;

const LeftSide = styled.div`
  width: 50%;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const RightSide = styled(LeftSide)`
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const VideoContainer = styled(ImageContainer)`
  height: 100%;
`;

const Video = styled.iframe`
  width: 100%;
  min-height: 300px;
`;

const ImageLinks = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;

export default function Photo({ photo }) {
  return (
      <div className="photo-layout">
        <H2>{photo.title}</H2>
        <LayoutBody>
          <LeftSide>
            <ImageContainer>
              {`${photo.media_type}` === 'image' &&
                <Image src={`${photo.url}`} alt={`${photo.title}`}/>
              }
              {`${photo.media_type}` === 'video' &&
                <VideoContainer>
                  <Video src={photo.url} frameBorder="0" title={`${photo.title}`} />
                </VideoContainer>  
              }    
            </ImageContainer>
            <ImageLinks>
              {`${photo.media_type}` === 'image' &&
                <p><a href={`${photo.url}`}>View Full-Sized Image</a> | <a href={`${photo.hdurl}`}>HD Version</a></p>
              }
            </ImageLinks>
          </LeftSide>
          <RightSide>
            <DescriptionContainer>
              <p className="description">{photo.explanation}</p>
              {/* Check if there is a copyright */}
              <p className="copyright">Copyright: {photo.copyright !== undefined ? `${photo.copyright}` : `In Public Domain`}</p>
            </DescriptionContainer>
          </RightSide>
        </LayoutBody>
      </div>
  );
}