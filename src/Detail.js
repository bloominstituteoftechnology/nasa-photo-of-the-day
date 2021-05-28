import React, {useState, useEffect} from 'react'
	
	

	const Details = (props) => {
	    const {info} =props;
	    return(
	        <div className='details-container'>
	            <p>
	                {info.explanation}
	            </p>
	        </div>
	    )
	}
	

	export default Detail;