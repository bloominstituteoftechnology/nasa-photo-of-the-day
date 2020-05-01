import React, {useEffect} from "react";
import "./post.css";
import PostHeader from "./postHeader.js";
import PostDesc from "./postDesc.js";


import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

export default function Post(props){

	const classes = useStyles();
	useEffect( () => {

		const img = document.querySelector('.nasaImg');

		img.addEventListener('click', (event) => {

			img.style.transition = '1s';

			img.classList.toggle('nasaImgLarge');

		});

	},[]);

	return(

		<div className = "postDiv">

			<PostHeader title = {props.title} date = {props.date} />

			<img src = {props.url} className="nasaImg" alt={props.title} />

			<Fab size="medium" color="secondary" aria-label="add">
				<AddIcon />
			</Fab>

			<PostDesc desc = {props.desc} />

		</div>

		)

};