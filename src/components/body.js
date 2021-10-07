import React, {useState, useEffect} from "React"
import axios from "axios";

export default function Body() {
    const {info, setInfo} = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(res => {
            console.log(res);
            setInfo(res.data);
          }).catch (err => {
            console.log(err);
          })
      });

    return(
      <div>
        <h1>{info.title}</h1>
          <img src={info.photo} alt={"Unable to display"}></img>
          <p>{info.desc}</p>
        <Body title={info.title} photo={info.photo} desc={info.desc} />
      </div>
    )
}