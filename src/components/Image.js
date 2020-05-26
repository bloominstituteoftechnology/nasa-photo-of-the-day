import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

const Image = () => {
	const { url, media } = useContext(MainContext);

	if (media === 'image') {
		return <img src={url} alt='Space Stuff'></img>;
	} else if (media === 'video') {
		return <iframe src={url} height='500' width='800' title='Space Vid' />;
	} else {
		return <></>;
	}
};

export default Image;
