/** @format */

import React from 'react';
import MediaPlayer from './MediaPlayer/MediaPlayer';

function PhotoOfTheDay(props) {
	const { date, description, title, url, mediaType } = props;

	return (
		<section className='photoComponentParent'>
			<h1>{title}</h1>
			<h2>{date}</h2>
			<MediaPlayer title={title} url={url} mediaType={mediaType} />
			<p>{description}</p>
		</section>
	);
}

export default PhotoOfTheDay;
