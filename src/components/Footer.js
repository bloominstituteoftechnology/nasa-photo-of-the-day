//Props?: Yes
//State?: Yes

import React from "react";
import NasaBG from "../Styles";


function NasaFooter (props) {


return (

<NasaBG type="highlight"><p>Copyright: {props.data.copyright} </p></NasaBG>

)


}

export default NasaFooter;