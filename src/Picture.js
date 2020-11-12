import React from 'react';
import './App.css';
import Body from './Body';

export const Picture = (props) => {
	console.log('picture page', props.data);
	return (
		<div className='fullWidth sectionContainer' style={{
			backgroundImage: `url(` + `${props.data.url}` + `)`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}}>
			<Body data={props.data} />

		</div>
	);
};
export default Picture;
