/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD title.js
 * 7/14/2021
 */

//import react
import React from "react";

//Default function definition, pass in {date}
export default function Title({title})
{
    //Return the title in h1 tag
    return <h1> This is the title {title}</h1>;
}