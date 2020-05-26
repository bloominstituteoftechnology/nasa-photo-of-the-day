import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';
import styled, { css } from 'styled-components';

const Img = styled.img`
	width: 100%;
	height: auto;
`;

const Vid = styled.iframe`
	width: 100%;
	min-height: 500px;
	height: 100%;
	border: none;
`;

const Image = () => {
	const { url, media } = useContext(MainContext);

	if (media === 'image') {
		return <Img src={url} alt='Space Stuff'></Img>;
	} else if (media === 'video') {
		return <Vid src={url} title='Space Vid' />;
	} else {
		return <></>;
	}
};

export default Image;
