/** @format */

import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const DescriptionPopover = (props) => {
	const { description, title } = props;
	const [showDescription, setShowDescription] = useState(false);

	const toggle = () => setShowDescription(!showDescription);

	return (
		<aside>
			<Button id='Popover1' type='button'>
				Learn more about "{title}"
			</Button>
			<Popover
				placement='top'
				isOpen={showDescription}
				target='Popover1'
				toggle={toggle}
			>
				<PopoverHeader id='Popover1-header'>
					What the Experts Say
				</PopoverHeader>
				<PopoverBody id='Popover1-body'>{description}</PopoverBody>
			</Popover>
		</aside>
	);
};

export default DescriptionPopover;
