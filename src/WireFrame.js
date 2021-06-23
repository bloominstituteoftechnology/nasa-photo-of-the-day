import React from 'react'
import './WireFrame.css'

const WireFrame = props => {
	return (
		<div className="container">
			<div className="header">
				<img src="https://gpm.nasa.gov/sites/default/files/NASA-Logo-Large.jpg" alt="Nasa Logo" className="nasa-logo" />
				<h2>Nasa Photo of the Day</h2>
				<p className="coder"> <span>Made by:</span> Steve Rivera</p>
			</div>
			<div className="app-body">
				<div className="title-header">
						<div className="title">{props.photo.title}</div>
						<div className="date">{props.photo.date}</div>
				</div>
				<div className="photo-body">
					<img src={props.photo.url} alt="nasa apod" className="photo" />
					<p className="photo-explanation">{props.photo.explanation}</p>
				</div>	
				</div>
			</div>
		
	)
}

export default WireFrame