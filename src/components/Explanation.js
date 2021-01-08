import React from "react";
import { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

export default function Explanation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Learn More
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{props.data.explanation}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
