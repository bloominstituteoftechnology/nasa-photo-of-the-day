import React, {useState, useEffect} from 'react'
	
	

	const Gallery = props => {
	    const {imgData} = props;
	    return(
	        <div className='gallery-container'>
	            <img alt='datily-img'
	            className='nasa-gallery-img'
	            src={imgData.url} />
	

	        </div>
	    )
	}
	

	export default Gallery;