import React, {useState, useEffect} from "react";
import "./post.css";
import PostHeader from "./postHeader.js";
import PostDesc from "./postDesc.js";

export default function Post(props){

	useEffect( () => {

		const img = document.querySelector('.nasaImg');

		img.addEventListener('click', (event) => {
			console.log('clicked');
			img.style.transition = '1s';
			img.classList.toggle('nasaImgLarge');
		});

	},[]);

	return(

		<div className = "postDiv">

			<PostHeader title = {props.title} date = {props.date} />

			<img src = {props.url} className="nasaImg" />

			<PostDesc desc = {props.desc} />



		</div>

		)

};