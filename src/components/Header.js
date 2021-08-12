import React from "react";
import styled from 'styled-components';

const ParentContainer = styled.div`
   display: flex;
   justify-content: center;
   align-item: center;
   flex-direction: column;
   width: 100%;
   background-color: black;
   color: white;
`
const ChildContainer = styled.div`
   margin: 10px;
`


function Header(props) {
   const { copyright, date, title } = props;

   return (
      <ParentContainer>
         <ChildContainer>
            { <h1> NASA Photo of the Day </h1> }
         </ChildContainer>
         <ChildContainer>
            { title && <h3>Title: {title} </h3> }
         </ChildContainer>
         <ChildContainer>
            { date && <h3>Date: {date} </h3> }
         </ChildContainer>
         <ChildContainer>
            { copyright && <h3>Copyright: {copyright} </h3> }
         </ChildContainer>
      </ParentContainer>
   )
}

export default Header;