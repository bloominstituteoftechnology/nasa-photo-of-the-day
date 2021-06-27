import React from 'react'
import './WireFrame.css'
import {Toast, Card, CardTitle, CardImg, CardText, CardBody} from 'reactstrap'

const WireFrame = props => {
	return (
		<div>
			<Toast style={{
				margin: '0 auto'
			}}>
					<img src="https://gpm.nasa.gov/sites/default/files/NASA-Logo-Large.jpg" alt="Nasa Logo" className="nasa-logo" />
				<Toast>
					<h2>Nasa Photo of the Day</h2>
					<p className="coder"> <span>Made by:</span> Steve Rivera</p>
				</Toast>
			</Toast>

				<Card>
					<CardBody>
						<CardTitle className="title-header">
								<div className="title">{props.photo.title}</div>
						</CardTitle>
								<div className="date">{props.photo.date}</div>
						<CardImg style={{ width: '50%', height: '100%', margin: '0 auto'}} src={props.photo.url} alt="nasa apod" className="photo" />
							<CardText>{props.photo.explanation}</CardText>
					</CardBody>
				</Card>
			</div>
		
	)
}

export default WireFrame