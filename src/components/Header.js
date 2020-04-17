//Props?: Yes
//State?: Yes

import React from "react";
import NasaBG from "../Styles";



const NasaHead = (props) => {

    return(
    <NasaBG type="highlight"><h1>{props.data.title} </h1></NasaBG>
    )
};

export default NasaHead;

