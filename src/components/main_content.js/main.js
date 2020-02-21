import React, { useState, useEffect } from "react";
import NasaCard from "../main_content.js/nasaImg";
import {
  Jumbotron,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import axios from "axios";
import "./main.css";

function Main() {
  const [img, setImg] = useState([]);
  const [date, setDate] = useState([]);

  const ButtonTest = props => {
    return (
      <>
        {" "}
        <Button color="primary">Submit</Button>
      </>
    );
  };

  // const handleSubmit = (e) => {
  //  return (
  //    e.preventDefault()
  //   //console.log(e.target.value)
  //  )}

  //  const handleInputChange = () => {
  //   return (
  //     console.log(hadn)
  //   )
  //  }

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dR6HJjbWWnsJNIcqpHqrHtw5uezXohakocqhIEPE"
      )
      .then(res => {
        setImg([res.data]);
      })
      .catch(error => {
        console.log("Sorry no photo", error);
      });
  }, []);

  // useEffect(()=>{
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=dR6HJjbWWnsJNIcqpHqrHtw5uezXohakocqhIEPE&${date}`)
  //   .then(res => {
  //     setImg([res.data])
  //   })
  //   .catch(error => {
  //     console.log("Sorry no photo", error);
  //   });
  // }, []);

  return (
    <Jumbotron>
      <Card className="mainBodyContainer">
        {/* <HandleChange /> */}
        <CardHeader>
          <CardTitle tag="h3" className="day">
            Photo Of The Day
          </CardTitle>
          <CardText>
            <label htmlFor="start"> Date: </label>
          </CardText>
        </CardHeader>
        <CardBody>
          <CardHeader>
            <form>
              {/* onSubmit={handleSubmit} */}

              <input //onChange={HandleChange}
                type="date"
                id="start"
                name="photo-start"
                min="1900-01-01"
                max="2020-03-03"
              />
              <ButtonTest />
            </form>
            <div className="imgOfDay">
              {img.map((info, index) => {
                return (
                  <NasaCard
                    key={index}
                    date={info.date}
                    explanation={info.explanation}
                    hdurl={info.hdurl}
                  />
                );
              })}
            </div>
            {/* <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        /> */}
          </CardHeader>
        </CardBody>
      </Card>
    </Jumbotron>
  );
}

export default Main;
