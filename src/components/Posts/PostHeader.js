import React from 'react';

const PostHeader = props => {

    const { title, image  } = props;

    return (
         <div>
            <div>  
              <img src={image} alt="space image from Nasa"></img> 
            </div>
            <div>
              <h3>{title}</h3>
            </div> 
        </div>
    )
}

export default PostHeader;