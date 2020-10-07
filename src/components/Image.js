import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/index";

export default function Image(props) {
    const { camera, close } = props
    const [image, setImage] = useState(null)
//   useEffect(() => {
//     axios.get(`${BASE_URL}${API_KEY}`);
//   });

return (
    <div>test</div>
)
}
