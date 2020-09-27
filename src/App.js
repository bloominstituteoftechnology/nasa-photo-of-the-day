import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import "./App.css";
import NasaImg from "./components/NasaImg";
import NasaBody from "./components/NasaBody";
import { Card, Container, Row, Col } from "reactstrap";

function App() {
  const [apod, setApod] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=8pfLcxz7ICT3fKg0p9AzCMSXzMKxMa3uAvxcxGs8&date=${
          startDate.toISOString().split("T")[0]
        }`
      )
      .then((response) => {
        console.log(response);
        setApod(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [startDate]);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Card>
              <NasaImg props={apod} />
              <DatePicker selected={startDate} onChange={handleChange} />
              <NasaBody props={apod} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
