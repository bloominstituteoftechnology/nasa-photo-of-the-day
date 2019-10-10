import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle} from 'reactstrap';

const NasaPhoto = (props) => {
    const [nasaPhoto, setNasaPhoto] = useState([]);
const apiKey = 'ye5nhHL2YiENbDUH5HsPo5WlrVlL4qgSXBD63ceZ'
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(response => {
            const data = response.data;
            console.log("Nasa Photo of the day", data);
            setNasaPhoto(data);
        })
            .catch(error => {
                console.log("The data was not returned", 
                error);
            });
        },[]);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Nasa Photo of the Day</CardTitle>
          <CardSubtitle>Date</CardSubtitle>
        </CardBody>
        <img width="80%" src={nasaPhoto.url} alt="Card image cap" />
        <CardBody>
          <CardText></CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>

    </div>
  );
};
export default NasaPhoto;
 /*
        nasaPhoto = {
            copyright: "Eric Wagner"
            date: "2019-10-10"
            explanation: "On September 24, a late evening commercial flight from Singapore to Australia offered stratospheric views of the southern hemisphere's night sky, if you chose a window seat. In fact, a well-planned seating choice with a window facing toward the Milky Way allowed the set up of a sensitive digital camera on a tripod mount to record the galaxy's central bulge in a series of 10 second long exposures.  By chance, one of the exposures caught this bright fireball meteor in the starry frame. Reflected along the wing of the A380 aircraft, the brilliant greenish streak is also internally reflected in the double layer window, producing a fainter parallel to the original meteor track. In the southern sky Jupiter is the bright source beneath the galactic bulge and seen next to a green beacon, just off the wing tip."
            hdurl: "https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner2400.jpg"
            media_type: "image"
            service_version: "v1"
            title: "Mid-Air Meteor and Milky Way"
            url: "https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner1200.jpg"
        }
    */
