/** @format */

import React from 'react';

function MediaPlayer(props) {
	const { mediaType, url, title } = props;

	if (mediaType === 'video') {
		return (
			<iframe
				width='320'
				height='240'
				src={url}
				title={title}
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen='true'
			></iframe>
		);
	} else {
		return (
			<img
				src={url}
				title={title}
				alt='This is populated from the Astronomy Photo of the Day website'
			/>
		);
	}
}

export default MediaPlayer;
