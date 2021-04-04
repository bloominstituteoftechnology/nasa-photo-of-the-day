/** @format */

import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import DescriptionPopover from './DescriptionPopover/DescriptionPopover';
import MediaPlayer from './MediaPlayer/MediaPlayer';

function PhotoOfTheDay(props) {
	const { date, description, title, url, mediaType } = props;

	return (
		<section>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className='display-3'>{title}</h1>
					<h2 className='lead'>{date}</h2>
					<MediaPlayer title={title} url={url} mediaType={mediaType} />
					<DescriptionPopover description={description} title={title} />
				</Container>
			</Jumbotron>
		</section>
	);
}

export default PhotoOfTheDay;
