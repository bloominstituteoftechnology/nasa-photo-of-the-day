import React from "react";
import { Button } from "reactstrap";
import { ButtonFont } from "./Styles";

const InfoButton = (props) => {
  return (
    <ButtonFont>
      <Button color="info" size="lg">
        Learn More Here!
      </Button>
    </ButtonFont>
  );
};

export default InfoButton;
