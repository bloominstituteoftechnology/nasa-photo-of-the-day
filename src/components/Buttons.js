import React from "react";
import { Button } from "reactstrap"; 

const Buttons = (props) => {
   const { getRandomDate } = props;
   const randomButton = document.querySelector(".random-button");

    return (
        <div>
            <Button color="danger" className="random-button" onClick={console.log("hey")}>Random Picture</Button>
        </div>
    )
}

export default Buttons;