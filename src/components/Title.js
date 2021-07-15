/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD Title.js
 * 7/14/2021
 * 2.2.4 Advanced styling
 * 7/15/2021
 */

//import react
import React from "react";
import styled from 'styled-components';

//Define a style for h1
const SpaceTitle = styled.h1`
  color:yellow;
`;

//Default function definition, pass in {title}
export default function Title({title})
{
    //Return the title in h1 tag
    return <SpaceTitle> {title}</SpaceTitle>;
}