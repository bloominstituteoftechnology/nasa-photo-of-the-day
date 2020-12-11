import React from 'react';
import styled from 'styled-components';

//styles
const StyledFeaturedImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 5% auto;
  font-size: 16px;
  text-align: left;
  color: white;
  .feature-div {
    align-items: center;
    justify-content: space-evenly;
    display: flex;
  }
  .image-container {
    min-width: 100px;
  }
  .img-container img {
    height: 70vh;
    max-width: 60vw;
  }
  .img-container iframe {
    width: 50vw;
    height: 50vh;
    margin: 0;
    padding: 0;
  }
  .image-text li{
    list-style-type: none;
    margin: 0 0 5% 0;
    padding: 0;
  }
  .image-text {
    max-width: 60%;
    min-width: 100px;
  }
  .image-text li span{
    font-weight: bold;
  }
  .image-text ul {
    margin: 0;
    padding: 0 5% 0 0;
  }
`


const FeaturedImg = (props) => {
  const { copyright, title, explanation, url, media_type, id } = props.image;
  return (
    <StyledFeaturedImg>
      <div className="featured-img">
        <div className="feature-div">
          <div className="image-text">
            <ul>
              {
              // for each category, check if it exists before showing
              }
              { copyright &&
              <li>
                <span>Copyright: </span>
                {copyright}
              </li>
              }
              { title &&
              <li>
                <span>Title: </span>
                {title}
              </li>
              }
              { explanation &&
              <li>
                <span>Explanation: </span>
                {explanation}
              </li>
              }
            </ul>
          </div>
          <div className="img-container">
            {
            media_type === 'image'
              ? <img src={url} alt={title}/>
              : <iframe src={url} title={id}></iframe>
            }
            
          </div>
        </div>
      </div>
    </StyledFeaturedImg>

  );
};

export default FeaturedImg