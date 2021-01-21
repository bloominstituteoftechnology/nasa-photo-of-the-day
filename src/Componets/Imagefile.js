import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

import { BASE_URL, API_KEY } from "../constants/index";

// axios
// 	.get(`${BASE_URL}?api_key=${API_KEY}`)
// 	.then((res) => {
// 		return res.data;
// 	})
// 	.catch((err) => console.log(err));

// console.log(data);
function Imagefile(props) {
	return (
		<div className="imageFile">
			<img src={props.imageurl}></img>
		</div>
	);
}
export default Imagefile;
