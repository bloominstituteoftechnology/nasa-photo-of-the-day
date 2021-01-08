import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Copyright from "./Copyright";
import Explanation from "./Explanation";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function Apod() {
  const [apod, setApod] = useState([]);
  const { title, date, hdurl } = apod;

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => setApod(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5" style={{ textTransform: "uppercase" }}>
            {title}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            PICTURE OF THE DAY: {date}
          </CardSubtitle>
        </CardBody>
        <img width="100%" src={hdurl} alt="NASA Astronomy of the Day" />
        <CardBody>
          <CardText>
            <Explanation data={apod} />
          </CardText>
          <Copyright data={apod} />
        </CardBody>
      </Card>
    </div>
  );
}
