import React from 'react';

export const Picture = (props) => {
	console.log('picture page', props.data);
	return (
		<div>
			<img src={props.data.url} alt={props.data.title} />
		</div>
	);
};
export default Picture;
